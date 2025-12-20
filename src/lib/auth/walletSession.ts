import crypto from "crypto";

const SESSION_COOKIE = "hot_wallet_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

export type WalletSession = {
  address: string;
  issuedAt: number;
  expiresAt: number;
};

function getSecret() {
  const secret = process.env.WALLET_SESSION_SECRET;
  if (!secret) {
    throw new Error("WALLET_SESSION_SECRET is not set");
  }
  return secret;
}

export function signSession(payload: WalletSession) {
  const secret = getSecret();
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto.createHmac("sha256", secret).update(body).digest("base64url");
  return `${body}.${sig}`;
}

export function verifySession(token: string): WalletSession | null {
  const secret = getSecret();
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = crypto.createHmac("sha256", secret).update(body).digest("base64url");
  if (expected.length !== sig.length) return null;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString()) as WalletSession;
    if (Date.now() > payload.expiresAt) return null;
    return payload;
  } catch {
    return null;
  }
}

export function createSession(address: string): { token: string; expiresAt: number } {
  const issuedAt = Date.now();
  const expiresAt = issuedAt + SESSION_TTL_MS;
  const token = signSession({ address, issuedAt, expiresAt });
  return { token, expiresAt };
}

export function cookieOptions(expires: Date) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires
  };
}

export function getSessionCookieName() {
  return SESSION_COOKIE;
}

