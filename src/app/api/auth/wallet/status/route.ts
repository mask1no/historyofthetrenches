import { GET as meHandler } from "@/app/api/auth/wallet/me/route";

export async function GET() {
  return meHandler();
}


