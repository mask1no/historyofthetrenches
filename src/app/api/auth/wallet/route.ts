import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: "Use /api/auth/wallet/nonce and /verify instead." },
    { status: 410 }
  );
}

export const POST = GET;
export const DELETE = GET;

