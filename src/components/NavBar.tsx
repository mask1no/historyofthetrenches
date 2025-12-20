"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Bell, LogOut, X, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabaseBrowser } from "@/lib/supabase/client";

const navItems = [
  { label: "Archive", href: "/archive" },
  { label: "Timeline", href: "/timeline" },
  { label: "Community", href: "https://x.com/historytrenches" }
];

export function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [hasSupabaseSession, setHasSupabaseSession] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [notifications] = useState<any[]>([]);
  const isAuthenticated = hasSupabaseSession || !!walletAddress;

  const setSupabaseUser = useCallback((user: any | null | undefined) => {
    if (user) {
      setHasSupabaseSession(true);
      setUserName(
        user.user_metadata?.full_name || user.user_metadata?.name || user.email || "Member"
      );
    } else {
      setHasSupabaseSession(false);
      setUserName(null);
    }
  }, []);

  const initials = useMemo(() => {
    const nameSource = userName || walletAddress;
    if (!nameSource) return "U";
    return nameSource
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }, [userName, walletAddress]);

  const handleLoginWithX = async () => {
    setAuthError(null);
    setAuthLoading(true);
    try {
      await supabaseBrowser.auth.signInWithOAuth({
        provider: "twitter",
        options: {
          redirectTo:
            typeof window !== "undefined" ? `${window.location.origin}/auth/callback` : undefined
        }
      });
    } catch (err: any) {
      setAuthError(err?.message || "Login failed. Please try again.");
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    setShowNotifications(false);
    setShowUserMenu(false);
    setShowLoginModal(false);
    await Promise.allSettled([
      supabaseBrowser.auth.signOut(),
      fetch("/api/auth/wallet/logout", { method: "POST" })
    ]);
    setHasSupabaseSession(false);
    setWalletAddress(null);
    setUserName(null);
    setShowNotifications(false);
    setShowUserMenu(false);
    router.refresh();
  };

  const hydrateWalletStatus = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/wallet/me", { cache: "no-store" });
      if (!res.ok) throw new Error("No wallet session");
      const data = (await res.json()) as { address: string | null };
      if (data.address) {
        setWalletAddress(data.address);
        setHasSupabaseSession((prev) => prev);
      } else {
        setWalletAddress(null);
      }
    } catch {
      setWalletAddress(null);
    }
  }, []);

  useEffect(() => {
    supabaseBrowser.auth.getSession().then(({ data }) => {
      setSupabaseUser(data.session?.user);
    });
    hydrateWalletStatus();
    const { data: listener } = supabaseBrowser.auth.onAuthStateChange((_, session) => {
      setSupabaseUser(session?.user);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, [hydrateWalletStatus, setSupabaseUser]);

  const handleWalletLogin = async () => {
    setAuthError(null);
    setAuthLoading(true);
    try {
      const provider = (window as any).solana;
      if (!provider || !provider.isPhantom) {
        setAuthError("Phantom wallet not found. Please install Phantom.");
        setAuthLoading(false);
        return;
      }
      const { publicKey } = await provider.connect();
      const address = publicKey.toBase58();

      const nonceRes = await fetch(`/api/auth/wallet/nonce?address=${encodeURIComponent(address)}`);
      if (!nonceRes.ok) throw new Error("Could not fetch nonce");
      const { nonce, expiresAt } = await nonceRes.json();

      const issuedAt = new Date().toISOString();
      const domain = typeof window !== "undefined" ? window.location.host : "historyofthetrenches.xyz";
      const message = `Sign in to History of the Trenches\nDomain: ${domain}\nAddress: ${address}\nNonce: ${nonce}\nExpires: ${expiresAt}\nIssuedAt: ${issuedAt}`;
      const encodedMessage = new TextEncoder().encode(message);
      const signed = await provider.signMessage(encodedMessage, "utf8");
      const { default: bs58 } = await import("bs58");
      const signature = bs58.encode(signed.signature);

      const verifyRes = await fetch("/api/auth/wallet/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, nonce, signature, issuedAt })
      });
      if (!verifyRes.ok) {
        const errText = await verifyRes.text();
        throw new Error(errText || "Wallet verification failed");
      }

      await hydrateWalletStatus();
      setShowLoginModal(false);
    } catch (error: any) {
      console.error(error);
      setAuthError(error?.message || "Wallet login failed. Please try again.");
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            History of the Trenches
          </Link>
          <nav className="hidden items-center gap-1 text-sm text-muted md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className={`rounded-full px-4 py-2 transition hover:text-fg hover:bg-card hover:underline hover:decoration-2 hover:decoration-accentGold ${
                  pathname === item.href
                    ? "bg-card text-fg underline decoration-2 decoration-accentGold"
                    : ""
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/archive">
            <Button
              variant="default"
              className="hidden md:inline-flex bg-accentGold text-fg hover:bg-accentGold/90"
            >
              Explore
            </Button>
          </Link>
          {isAuthenticated ? (
            <>
              <div className="relative">
                <button
                  className="relative hidden h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-fg/30 hover:text-fg md:flex"
                  aria-label="Notifications"
                  onClick={() => setShowNotifications((v) => !v)}
                >
                  <Bell className="h-4 w-4" />
                  {notifications.length > 0 && (
                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-accentGold shadow-subtle" />
                  )}
                </button>
                {showNotifications && (
                  <div className="absolute right-0 top-12 w-64 rounded-xl border border-border bg-card p-4 text-sm shadow-subtle">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-semibold">Notifications</span>
                      <span className="text-xs text-muted">{notifications.length} alerts</span>
                    </div>
                    {notifications.length === 0 ? (
                      <p className="text-xs text-muted">No alerts yet. Coming soon.</p>
                    ) : (
                      <ul className="space-y-2 text-xs text-muted">
                        {notifications.map((n) => (
                          <li key={n.id}>{n.title}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium text-fg transition hover:border-accentGold"
                  onClick={() => setShowUserMenu((v) => !v)}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-border text-xs font-semibold">
                    {initials}
                  </span>
                  <span className="hidden sm:inline">{userName ?? walletAddress}</span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 top-12 w-56 rounded-xl border border-border bg-card p-3 text-sm shadow-subtle">
                    <button
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left transition hover:bg-bg"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Button variant="secondary" className="inline-flex" onClick={() => setShowLoginModal(true)}>
              Login
            </Button>
          )}
        </div>
      </div>
      {showLoginModal && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={() => setShowLoginModal(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-subtle"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition hover:border-accentGold hover:text-fg"
              onClick={() => setShowLoginModal(false)}
            >
              <X className="h-4 w-4" />
            </button>
            <div className="mb-5 pr-10">
              <h3
                className="text-xl font-semibold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Login
              </h3>
              <p className="mt-2 text-sm text-muted">
                Choose how you want to authenticate before using community features.
              </p>
            </div>
            <div className="space-y-3">
              <Button
                className="w-full justify-between"
                variant="subtle"
                onClick={handleLoginWithX}
                disabled={authLoading}
              >
                <span>Continue with X</span>
                <span className="text-xs text-muted">Twitter OAuth</span>
                {authLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              </Button>
              <Button
                className="w-full justify-between"
                variant="subtle"
                onClick={handleWalletLogin}
                disabled={authLoading}
              >
                <span>Continue with Wallet</span>
                <span className="text-xs text-muted">Phantom signature</span>
                {authLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              </Button>
              {authError && (
                <div className="flex items-start gap-2 rounded-lg border border-border bg-bg px-3 py-2 text-sm text-accentRed">
                  <AlertCircle className="mt-[2px] h-4 w-4" />
                  <span>{authError}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

