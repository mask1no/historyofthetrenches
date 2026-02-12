import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { LinkIcon } from "@/components/LinkIcon";
import { NavBar } from "@/components/NavBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Kit | History of the Trenches",
  description:
    "A guided kit for onboarded traders to deepen custody, research, privacy, and infra skills.",
  alternates: {
    canonical: "https://www.historyofthetrenches.xyz/kit"
  },
  openGraph: {
    title: "Kit | History of the Trenches",
    description:
      "A guided kit for onboarded traders to deepen custody, research, privacy, and infra skills.",
    url: "https://www.historyofthetrenches.xyz/kit",
    siteName: "History of the Trenches",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "History of the Trenches"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kit | History of the Trenches",
    description:
      "A guided kit for onboarded traders to deepen custody, research, privacy, and infra skills.",
    images: ["/og.png"]
  }
};

export default function KitPage() {
  return (
    <main id="main-content" className="min-h-screen pb-16">
      <NavBar />
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="mb-6 space-y-3">
          <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
            The Kit
          </h1>
          <p className="max-w-3xl text-base text-muted">
            A toolkit bridge for newly onboarded traders who want to move from app-level clicks to
            first-principles control. Learn the systems, risks, and habits that keep you safe as
            you go deeper into web3.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-bg/70 px-4 py-3 text-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Principle</div>
            <div className="text-lg font-semibold text-fg">Don&apos;t trust, verify</div>
          </div>
          <div className="rounded-xl border border-border bg-bg/70 px-4 py-3 text-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Goal</div>
            <div className="text-lg font-semibold text-fg">Control is convenience</div>
          </div>
          <div className="rounded-xl border border-border bg-bg/70 px-4 py-3 text-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Signal</div>
            <div className="text-lg font-semibold text-fg">Not your keys, not your crypto</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Wallets</CardTitle>
              <p className="text-sm text-muted">Hot and cold setups for custody control.</p>
            </CardHeader>
            <CardContent className="grid gap-3 text-[13px] text-muted md:grid-cols-2 link-underline">
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://sparrowwallet.com" target="_blank" rel="noopener noreferrer">
                    Sparrow (BTC)
                  </a>
                </div>
                <p className="text-xs">PSBT + privacy tooling.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://wasabiwallet.io" target="_blank" rel="noopener noreferrer">
                    Wasabi (BTC)
                  </a>
                </div>
                <p className="text-xs">CoinJoin + Tor support.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://phantom.app" target="_blank" rel="noopener noreferrer">
                    Phantom (Solana)
                  </a>
                </div>
                <p className="text-xs">Solana DeFi + NFT wallet.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">
                    MetaMask (EVM)
                  </a>
                </div>
                <p className="text-xs">Default EVM wallet.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://coldcard.com" target="_blank" rel="noopener noreferrer">
                    Coldcard Mk4
                  </a>
                </div>
                <p className="text-xs">Bitcoin-only, air-gapped.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://trezor.io" target="_blank" rel="noopener noreferrer">
                    Trezor Safe
                  </a>
                </div>
                <p className="text-xs">Open-source security.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>On-Ramps</CardTitle>
              <p className="text-sm text-muted">KYC and non-KYC routes to get started safely.</p>
            </CardHeader>
            <CardContent className="grid gap-3 text-[13px] text-muted md:grid-cols-2 link-underline">
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://www.kraken.com" target="_blank" rel="noopener noreferrer">
                    Kraken
                  </a>
                </div>
                <p className="text-xs">Low fees, advanced trading.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a
                    href="https://www.coinbase.com/exchange"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Coinbase Exchange
                  </a>
                </div>
                <p className="text-xs">Beginner on-ramp.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3 md:col-span-2">
                <div className="font-semibold text-fg">Decentralized P2P</div>
                <p className="text-xs">
                  <a href="https://bisq.network" target="_blank" rel="noopener noreferrer">
                    Bisq
                  </a>
                  ,{" "}
                  <a href="https://hodlhodl.com" target="_blank" rel="noopener noreferrer">
                    Hodl Hodl
                  </a>
                  ,{" "}
                  <a href="https://robosats.com" target="_blank" rel="noopener noreferrer">
                    RoboSats
                  </a>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Non-KYC exchanges</div>
                <p className="text-xs">
                  <a href="https://www.mexc.com" target="_blank" rel="noopener noreferrer">
                    MEXC
                  </a>
                  ,{" "}
                  <a href="https://www.bybit.com" target="_blank" rel="noopener noreferrer">
                    Bybit
                  </a>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Decentralized swaps</div>
                <p className="text-xs">
                  <a href="https://app.uniswap.org" target="_blank" rel="noopener noreferrer">
                    Uniswap
                  </a>
                  ,{" "}
                  <a href="https://app.1inch.io" target="_blank" rel="noopener noreferrer">
                    1inch
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contribute to the Network</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-[13px] text-muted md:grid-cols-2 link-underline">
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Run your own node</div>
                <p className="text-xs">
                  <a href="https://bitcoincore.org" target="_blank" rel="noopener noreferrer">
                    Bitcoin Core
                  </a>{" "}
                  with{" "}
                  <a href="https://umbrel.com" target="_blank" rel="noopener noreferrer">
                    Umbrel
                  </a>{" "}
                  or{" "}
                  <a href="https://ronindojo.io" target="_blank" rel="noopener noreferrer">
                    RoninDojo
                  </a>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Self-hosted infra</div>
                <p className="text-xs">
                  Run RPCs to reduce dependency on centralized gateways with{" "}
                  <a href="https://start9.com" target="_blank" rel="noopener noreferrer">
                    Start9
                  </a>
                  .
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Lightning</div>
                <p className="text-xs">
                  <a href="https://umbrel.com" target="_blank" rel="noopener noreferrer">
                    Umbrel
                  </a>
                  ,{" "}
                  <a href="https://getalby.com" target="_blank" rel="noopener noreferrer">
                    Alby
                  </a>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Monitoring</div>
                <p className="text-xs">
                  <a href="https://uptimerobot.com" target="_blank" rel="noopener noreferrer">
                    UptimeRobot
                  </a>
                  ,{" "}
                  <a href="https://grafana.com" target="_blank" rel="noopener noreferrer">
                    Grafana
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Infrastructure Kit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-[13px] text-muted link-underline">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-bg/60 p-3">
                  <div className="font-semibold text-fg">Explorers</div>
                  <p className="text-xs">
                    <a href="https://etherscan.io" target="_blank" rel="noopener noreferrer">
                      Etherscan
                    </a>
                    ,{" "}
                    <a href="https://solscan.io" target="_blank" rel="noopener noreferrer">
                      Solscan
                    </a>
                    ,{" "}
                    <a href="https://mempool.space" target="_blank" rel="noopener noreferrer">
                      Mempool.space
                    </a>
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-bg/60 p-3">
                  <div className="font-semibold text-fg">Charts</div>
                  <p className="text-xs">
                    <span className="mr-1 inline-flex align-middle">
                      <LinkIcon name="dexscreener" />
                    </span>
                    <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
                      DexScreener
                    </a>
                    ,{" "}
                    <a href="https://www.tradingview.com" target="_blank" rel="noopener noreferrer">
                      TradingView
                    </a>
                    ,{" "}
                    <a href="https://birdeye.so" target="_blank" rel="noopener noreferrer">
                      Birdeye
                    </a>
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-bg/60 p-3">
                  <div className="font-semibold text-fg">Data</div>
                  <p className="text-xs">
                    <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer">
                      CoinGecko
                    </a>
                    ,{" "}
                    <a href="https://defillama.com" target="_blank" rel="noopener noreferrer">
                      DeFiLlama
                    </a>
                    ,{" "}
                    <a href="https://dune.com" target="_blank" rel="noopener noreferrer">
                      Dune
                    </a>
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-bg/60 p-3">
                  <div className="font-semibold text-fg">Infrastructure</div>
                  <p className="text-xs">
                    <a href="https://www.alchemy.com" target="_blank" rel="noopener noreferrer">
                      Alchemy
                    </a>
                    ,{" "}
                    <a href="https://www.quicknode.com" target="_blank" rel="noopener noreferrer">
                      QuickNode
                    </a>
                    ,{" "}
                    <a href="https://www.helius.dev" target="_blank" rel="noopener noreferrer">
                      Helius
                    </a>
                    ,{" "}
                    <a href="https://dappnode.com" target="_blank" rel="noopener noreferrer">
                      DAppNode
                    </a>
                  </p>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-lg border border-border bg-bg/60 p-3">
                  <div className="mb-2 flex items-center gap-2 font-semibold text-fg">
                    <Shield className="h-4 w-4 text-accentGold" />
                    OpSec
                  </div>
                  <div className="text-sm text-muted">
                    Know the trust model; every shortcut shifts your risk surface.
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-bg/60 p-3">
                  <div className="mb-2 flex items-center gap-2 font-semibold text-fg">
                    <Server className="h-4 w-4 text-accentGold" />
                    Layering
                  </div>
                  <div className="text-sm text-muted">
                    Chain your moves: acquire → isolate → swap → cold storage.
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-bg/60 p-3">
                  <div className="mb-2 flex items-center gap-2 font-semibold text-fg">
                    <Shield className="h-4 w-4 text-accentGold" />
                    Hygiene
                  </div>
                  <div className="text-sm text-muted">
                    Use your own node, coin control, and avoid KYC/non-KYC mixing.
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-bg/70 p-4">
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">Mixers</div>
                <p className="text-xs">
                  <strong className="text-fg">Advanced privacy only:</strong> use legal and ethical
                  judgment in your jurisdiction. Study threat models before touching any mixer or
                  coinjoin flow.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
