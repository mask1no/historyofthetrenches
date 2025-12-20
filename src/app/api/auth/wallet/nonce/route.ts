import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { rateLimit } from "@/lib/rate-limit";
import { saveNonce } from "@/lib/auth/walletNonceStore";

const TTL_MS = 1000 * 60 * 20; // 20 minutes

function isValidAddress(address?: string) {
  return typeof address === "string" && address.length > 20 && address.length < 80;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address") || "";
  const ip = request.headers.get("x-forwarded-for") || "anon";

  if (!rateLimit(`nonce:${ip}`, 20, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  if (!isValidAddress(address)) {
    return NextResponse.json({ error: "Invalid address" }, { status: 400 });
  }

  const nonce = randomUUID();
  const { expiresAt } = saveNonce(address, nonce, TTL_MS);

  return NextResponse.json({ nonce, expiresAt: new Date(expiresAt).toISOString() });
}

