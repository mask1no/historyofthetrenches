import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getSessionCookieName, verifySession } from "@/lib/auth/walletSession";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  if (!token) {
    return NextResponse.json({ address: null }, { status: 200 });
  }
  try {
    const session = verifySession(token);
    if (!session) {
      cookieStore.set(getSessionCookieName(), "", { path: "/", maxAge: 0 });
      return NextResponse.json({ address: null }, { status: 200 });
    }
    return NextResponse.json({ address: session.address }, { status: 200 });
  } catch {
    return NextResponse.json({ address: null }, { status: 200 });
  }
}

