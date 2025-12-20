import { NextResponse } from "next/server";
import bs58 from "bs58";
import nacl from "tweetnacl";
import { PublicKey } from "@solana/web3.js";
import { rateLimit } from "@/lib/rate-limit";
import { cookieOptions, createSession, getSessionCookieName } from "@/lib/auth/walletSession";
import { supabaseService } from "@/lib/supabase/server";

const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;

function isValidAddress(address?: string) {
  try {
    return !!address && new PublicKey(address);
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "anon";
  if (!rateLimit(`verify:${ip}`, 50, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const { address, nonce, signature, issuedAt } = body || {};

  if (!isValidAddress(address) || !nonce || !signature || !issuedAt) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const now = Date.now();
  const issuedTime = Date.parse(issuedAt);
  if (!Number.isFinite(issuedTime) || Math.abs(now - issuedTime) > 1000 * 60 * 30) {
    return NextResponse.json({ error: "IssuedAt outside allowed window" }, { status: 401 });
  }

  const supabase = supabaseService();
  const { data: nonceRow, error } = await supabase
    .from("wallet_nonces")
    .select("*")
    .eq("address", address)
    .eq("nonce", nonce)
    .eq("used", false)
    .gt("expires_at", new Date().toISOString())
    .maybeSingle();

  if (error || !nonceRow) {
    return NextResponse.json({ error: "Nonce invalid or expired" }, { status: 401 });
  }

  const domain = new URL(req.url).host;
  const message = `Sign in to History of the Trenches\nDomain: ${domain}\nAddress: ${address}\nNonce: ${nonce}\nExpires: ${new Date(
    nonceRow.expires_at
  ).toISOString()}\nIssuedAt: ${issuedAt}`;

  try {
    const messageBytes = new TextEncoder().encode(message);
    const signatureBytes = bs58.decode(signature);
    const publicKeyBytes = bs58.decode(address);

    if (
      signatureBytes.length !== nacl.sign.signatureLength ||
      publicKeyBytes.length !== nacl.sign.publicKeyLength
    ) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const valid = nacl.sign.detached.verify(messageBytes, signatureBytes, publicKeyBytes);
    if (!valid) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    await supabase.from("wallet_nonces").update({ used: true }).eq("id", nonceRow.id);

    const { token, expiresAt } = createSession(address);
    const res = NextResponse.json({ address });
    res.cookies.set(getSessionCookieName(), token, cookieOptions(new Date(expiresAt)));
    return res;
  } catch (err) {
    return NextResponse.json({ error: "Verification failed" }, { status: 400 });
  }
}

