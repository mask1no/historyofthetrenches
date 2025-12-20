import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getSessionCookieName } from "@/lib/auth/walletSession";

export async function POST() {
  const cookieStore = cookies();
  cookieStore.set(getSessionCookieName(), "", {
    path: "/",
    maxAge: 0,
    httpOnly: true,
    sameSite: "lax"
  });
  return NextResponse.json({ cleared: true });
}

