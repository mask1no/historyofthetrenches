import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { PublicKey } from "@solana/web3.js";
import { rateLimit } from "@/lib/rate-limit";
import { supabaseService } from "@/lib/supabase/server";

const TTL_MS = 1000 * 60 * 20; // 20 minutes

function isValidAddress(address?: string) {
  try {
    return !!address && new PublicKey(address);
  } catch {
    return false;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address") || "";
  const ip = request.headers.get("x-forwarded-for") || "anon";
  const userAgent = request.headers.get("user-agent") || null;

  if (!rateLimit(`nonce:${ip}`, 50, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  if (!isValidAddress(address)) {
    return NextResponse.json({ error: "Invalid address" }, { status: 400 });
  }

  const nonce = randomUUID();
  const expiresAt = new Date(Date.now() + TTL_MS).toISOString();

  const supabase = supabaseService();
  const { error } = await supabase.from("wallet_nonces").insert({
    address,
    nonce,
    expires_at: expiresAt,
    ip,
    user_agent: userAgent
  });

  if (error) {
    return NextResponse.json({ error: "Unable to create nonce" }, { status: 500 });
  }

  return NextResponse.json({ nonce, expiresAt });
}

