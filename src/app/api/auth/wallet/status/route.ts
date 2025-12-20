import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const SESSION_COOKIE = "hot_wallet_session";

export async function GET() {
  const cookieStore = cookies();
  const raw = cookieStore.get(SESSION_COOKIE)?.value;
  if (!raw) return NextResponse.json({ address: null });
  try {
    const parsed = JSON.parse(raw);
    return NextResponse.json({ address: parsed.address ?? null });
  } catch {
    return NextResponse.json({ address: null });
  }
}


