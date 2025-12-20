"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("Completing login...");

  useEffect(() => {
    const handleAuth = async () => {
      const errorParam = searchParams.get("error") || searchParams.get("error_description");
      if (errorParam) {
        setMessage("Login failed. Redirecting...");
        setTimeout(() => router.replace("/"), 1200);
        return;
      }

      const code = searchParams.get("code");
      const hashParams =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.hash.replace("#", ""))
          : new URLSearchParams();
      const accessToken = searchParams.get("access_token") || hashParams.get("access_token");
      const refreshToken = searchParams.get("refresh_token") || hashParams.get("refresh_token");

      if (code) {
        const { error } = await supabaseBrowser.auth.exchangeCodeForSession(code);
        if (error) {
          setMessage("Login failed. Redirecting...");
          setTimeout(() => router.replace("/"), 1200);
          return;
        }
      } else if (accessToken && refreshToken) {
        const { error } = await supabaseBrowser.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken
        });
        if (error) {
          setMessage("Login failed. Redirecting...");
          setTimeout(() => router.replace("/"), 1200);
          return;
        }
      } else {
        await supabaseBrowser.auth.getSession();
      }

      router.replace("/");
    };

    handleAuth();
  }, [router, searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg text-muted">{message}</div>
  );
}

