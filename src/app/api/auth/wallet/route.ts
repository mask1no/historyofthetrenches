import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import nacl from "tweetnacl";
import bs58 from "bs58";
import { randomUUID } from "crypto";

const SESSION_COOKIE = "hot_wallet_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days
const SESSION_COOKIE_BASE = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/"
};

export async function GET() {
  const nonce = randomUUID();
  return NextResponse.json({ nonce });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const { address, signature, nonce } = body || {};
  if (!address || !signature || !nonce) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const message = `Login to History of the Trenches: ${nonce}`;
    const messageBytes = new TextEncoder().encode(message);
    const signatureBytes = bs58.decode(signature);
    const publicKeyBytes = bs58.decode(address);

    const valid = nacl.sign.detached.verify(messageBytes, signatureBytes, publicKeyBytes);
    if (!valid) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const cookieStore = cookies();
    const expires = new Date(Date.now() + SESSION_TTL_MS);
    cookieStore.set(SESSION_COOKIE, JSON.stringify({ address, nonce }), {
      ...SESSION_COOKIE_BASE,
      expires,
      maxAge: SESSION_TTL_MS / 1000
    });

    return NextResponse.json({ address });
  } catch (err) {
    return NextResponse.json({ error: "Verification failed" }, { status: 400 });
  }
}

export async function DELETE() {
  const cookieStore = cookies();
  cookieStore.set(SESSION_COOKIE, "", {
    ...SESSION_COOKIE_BASE,
    maxAge: 0
  });
  return NextResponse.json({ cleared: true });
}

