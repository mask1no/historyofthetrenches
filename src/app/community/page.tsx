import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { events } from "@/data/events";
import { compareEventDatesDesc } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Stack | History of the Trenches",
  description:
    "A guided stack for onboarded traders to deepen custody, research, privacy, and infra skills.",
  alternates: {
    canonical: "https://www.historyofthetrenches.xyz/community"
  },
  openGraph: {
    title: "Stack | History of the Trenches",
    description:
      "A guided stack for onboarded traders to deepen custody, research, privacy, and infra skills.",
    url: "https://www.historyofthetrenches.xyz/community",
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
    title: "Stack | History of the Trenches",
    description:
      "A guided stack for onboarded traders to deepen custody, research, privacy, and infra skills.",
    images: ["/og.png"]
  }
};

export default function StackPage() {
  const featuredEvents = [...events]
    .sort(compareEventDatesDesc)
    .slice(0, 3);

  return (
    <main id="main-content" className="min-h-screen pb-16">
      <NavBar />
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="mb-6 space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="gold">Stack</Badge>
            <Badge variant="muted">Deep Dive</Badge>
          </div>
          <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
            The Stack
          </h1>
          <p className="max-w-3xl text-base text-muted">
            A guided bridge for already‑onboarded traders. Build depth in custody, research,
            privacy, and infrastructure. Move from app‑level clicks to first‑principles control.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-bg/70 px-4 py-3 text-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Principle</div>
            <div className="text-lg font-semibold text-fg">Verify, then scale</div>
          </div>
          <div className="rounded-xl border border-border bg-bg/70 px-4 py-3 text-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Goal</div>
            <div className="text-lg font-semibold text-fg">Control over convenience</div>
          </div>
          <div className="rounded-xl border border-border bg-bg/70 px-4 py-3 text-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Signal</div>
            <div className="text-lg font-semibold text-fg">Own the keys, own the outcomes</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Fiat On‑Ramps (KYC)</CardTitle>
              <p className="text-sm text-muted">
                Use for entry only. Exit to self‑custody fast and keep trading off‑platform.
              </p>
            </CardHeader>
            <CardContent className="overflow-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs uppercase text-muted">
                  <tr>
                    <th className="pb-2">Platform</th>
                    <th className="pb-2">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-t border-border/70">
                    <td className="py-3 font-semibold text-fg">
                      <a href="https://www.kraken.com" target="_blank" rel="noopener noreferrer">
                        Kraken
                      </a>
                    </td>
                    <td className="py-3">Low fees, advanced trading</td>
                  </tr>
                  <tr className="border-t border-border/70">
                    <td className="py-3 font-semibold text-fg">
                      <a href="https://www.coinbase.com/exchange" target="_blank" rel="noopener noreferrer">
                        Coinbase Exchange
                      </a>
                    </td>
                    <td className="py-3">Beginner on‑ramp</td>
                  </tr>
                  <tr className="border-t border-border/70">
                    <td className="py-3 font-semibold text-fg">
                      <a href="https://www.kucoin.com" target="_blank" rel="noopener noreferrer">
                        KuCoin
                      </a>
                    </td>
                    <td className="py-3">Wide alt selection</td>
                  </tr>
                  <tr className="border-t border-border/70">
                    <td className="py-3 font-semibold text-fg">
                      <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer">
                        Binance (Global)
                      </a>
                    </td>
                    <td className="py-3">Liquidity</td>
                  </tr>
                  <tr className="border-t border-border/70">
                    <td className="py-3 font-semibold text-fg">
                      <a href="https://www.gemini.com" target="_blank" rel="noopener noreferrer">
                        Gemini
                      </a>
                    </td>
                    <td className="py-3">Compliance focused</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Self‑Custody Wallets</CardTitle>
              <p className="text-sm text-muted">The foundation layer: keys under your control.</p>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted md:grid-cols-2">
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
                  <a href="https://electrum.org" target="_blank" rel="noopener noreferrer">
                    Electrum (BTC)
                  </a>
                </div>
                <p className="text-xs">Connect to your own node.</p>
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
                  <a href="https://www.getmonero.org/downloads/" target="_blank" rel="noopener noreferrer">
                    Monero GUI
                  </a>
                </div>
                <p className="text-xs">Privacy by default.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://trustwallet.com" target="_blank" rel="noopener noreferrer">
                    Trust Wallet
                  </a>
                </div>
                <p className="text-xs">Multi‑chain non‑custodial.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cold Storage</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted md:grid-cols-2">
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://coldcard.com" target="_blank" rel="noopener noreferrer">
                    Coldcard Mk4
                  </a>
                </div>
                <p className="text-xs">Bitcoin‑only, air‑gapped.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://blockstream.com/jade/" target="_blank" rel="noopener noreferrer">
                    Blockstream Jade
                  </a>
                </div>
                <p className="text-xs">Open‑source value pick.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://trezor.io" target="_blank" rel="noopener noreferrer">
                    Trezor Safe
                  </a>
                </div>
                <p className="text-xs">Open‑source security.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://bitbox.swiss/bitbox02/" target="_blank" rel="noopener noreferrer">
                    BitBox02 BTC
                  </a>
                </div>
                <p className="text-xs">Minimalist, Bitcoin‑only.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Stack</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted md:grid-cols-2">
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Explorers</div>
                <p className="text-xs">
                  <a href="https://etherscan.io" target="_blank" rel="noopener noreferrer">Etherscan</a>,{" "}
                  <a href="https://solscan.io" target="_blank" rel="noopener noreferrer">Solscan</a>,{" "}
                  <a href="https://mempool.space" target="_blank" rel="noopener noreferrer">Mempool.space</a>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Data</div>
                <p className="text-xs">
                  <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer">CoinGecko</a>,{" "}
                  <a href="https://defillama.com" target="_blank" rel="noopener noreferrer">DeFiLlama</a>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Charts</div>
                <p className="text-xs">
                  <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">DexScreener</a>,{" "}
                  <a href="https://www.dextools.io" target="_blank" rel="noopener noreferrer">DEXTools</a>,{" "}
                  <a href="https://birdeye.so" target="_blank" rel="noopener noreferrer">Birdeye</a>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Analytics</div>
                <p className="text-xs">
                  <a href="https://dune.com" target="_blank" rel="noopener noreferrer">Dune</a>,{" "}
                  <a href="https://glassnode.com" target="_blank" rel="noopener noreferrer">Glassnode</a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Operational Privacy</CardTitle>
              <p className="text-sm text-muted">
                Practical privacy for real trading: swaps, P2P paths, and sane opsec.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-auto rounded-xl border border-border bg-bg/60 p-3">
                <table className="w-full text-left text-sm">
                  <thead className="text-xs uppercase text-muted">
                    <tr>
                      <th className="pb-2">Tool Category</th>
                      <th className="pb-2">Specific Tool(s)</th>
                      <th className="pb-2">Primary Function &amp; Key Features</th>
                      <th className="pb-2">Operational Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted">
                    <tr className="border-t border-border/70">
                      <td className="py-3 font-semibold text-fg">Privacy DEX Aggregators</td>
                      <td className="py-3">
                        <a
                          href="https://silentswap.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg underline"
                        >
                          SilentSwap
                        </a>
                        ,{" "}
                        <a
                          href="https://1inch.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg underline"
                        >
                          1inch
                        </a>
                      </td>
                      <td className="py-3">
                        SilentSwap (Secret): privacy‑first routing with a toggle. 1inch: best‑price
                        routing, no KYC.
                      </td>
                      <td className="py-3">
                        SilentSwap is chain‑specific; vet privacy claims. 1inch isn’t private by
                        default—use clean wallets + Tor/VPN.
                      </td>
                    </tr>
                    <tr className="border-t border-border/70">
                      <td className="py-3 font-semibold text-fg">Non‑Custodial Swap Services</td>
                      <td className="py-3">
                        <a
                          href="https://stealthex.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg underline"
                        >
                          StealthEX
                        </a>
                        ,{" "}
                        <a
                          href="https://changenow.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg underline"
                        >
                          ChangeNOW
                        </a>
                        ,{" "}
                        <a
                          href="https://simpleswap.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg underline"
                        >
                          SimpleSwap
                        </a>
                      </td>
                      <td className="py-3">
                        Instant, account‑free swaps. Non‑custodial UX, fast routing.
                      </td>
                      <td className="py-3">
                        Semi‑private. KYC can be triggered. Use clean sources and staggered amounts.
                      </td>
                    </tr>
                    <tr className="border-t border-border/70">
                      <td className="py-3 font-semibold text-fg">Decentralized P2P Exchanges</td>
                      <td className="py-3">
                        <a
                          href="https://bisq.network"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg underline"
                        >
                          Bisq
                        </a>
                        ,{" "}
                        <a
                          href="https://hodlhodl.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg underline"
                        >
                          Hodl Hodl
                        </a>
                      </td>
                      <td className="py-3">
                        Bisq: fully decentralized, Tor, no KYC. Hodl Hodl: multisig escrow, no custody.
                      </td>
                      <td className="py-3">
                        Bisq is the gold standard but requires BTC deposit + always‑on client.
                        Hodl Hodl is simpler but relies on escrow trust.
                      </td>
                    </tr>
                    <tr className="border-t border-border/70">
                      <td className="py-3 font-semibold text-fg">Lightning‑First P2P</td>
                      <td className="py-3">
                        <a
                          href="https://robosats.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg underline"
                        >
                          RoboSats
                        </a>
                      </td>
                      <td className="py-3">
                        Lightning‑native P2P with random robot aliases; no accounts or KYC.
                      </td>
                      <td className="py-3">
                        Great for small, fast trades. Not ideal for large size due to LN limits.
                      </td>
                    </tr>
                    <tr className="border-t border-border/70">
                      <td className="py-3 font-semibold text-fg">Social/Personal Network P2P</td>
                      <td className="py-3">
                        <a
                          href="https://vexl.it"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fg underline"
                        >
                          Vexl
                        </a>
                      </td>
                      <td className="py-3">
                        Trade with trusted contacts via web‑of‑trust. No custody, no KYC.
                      </td>
                      <td className="py-3">
                        Requires a phone number (hashed). Good for local trust‑based trades.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid gap-3 text-sm text-muted md:grid-cols-3">
                <div className="rounded-lg border border-border bg-bg/60 p-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted">OpSec</div>
                  <div className="mt-2 text-sm">
                    Know the trust model—every shortcut shifts your risk surface.
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-bg/60 p-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted">Layering</div>
                  <div className="mt-2 text-sm">
                    Chain your moves: acquire → isolate → swap → cold storage.
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-bg/60 p-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted">Hygiene</div>
                  <div className="mt-2 text-sm">
                    Use your own node, coin control, and avoid KYC/non‑KYC mixing.
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted">
                The privacy landscape shifts fast; revisit tools as policies and threats evolve.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Infrastructure</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted md:grid-cols-2">
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Run your own node</div>
                <p className="text-xs">
                  <a href="https://bitcoincore.org" target="_blank" rel="noopener noreferrer">Bitcoin Core</a>{" "}
                  with{" "}
                  <a href="https://umbrel.com" target="_blank" rel="noopener noreferrer">Umbrel</a>{" "}
                  or{" "}
                  <a href="https://ronindojo.io" target="_blank" rel="noopener noreferrer">RoninDojo</a>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">RPC providers</div>
                <p className="text-xs">
                  <a href="https://chainstack.com" target="_blank" rel="noopener noreferrer">Chainstack</a>,{" "}
                  <a href="https://drpc.org" target="_blank" rel="noopener noreferrer">dRPC</a>,{" "}
                  <a href="https://getblock.io" target="_blank" rel="noopener noreferrer">GetBlock</a>
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Hardware</div>
                <p className="text-xs">
                  <a href="https://www.raspberrypi.com/products/raspberry-pi-5/" target="_blank" rel="noopener noreferrer">
                    Raspberry Pi 5
                  </a>
                  ,{" "}
                  <a href="https://www.intel.com/content/www/us/en/products/details/nuc.html" target="_blank" rel="noopener noreferrer">
                    Intel NUC
                  </a>
                  , or spare laptop.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Self‑hosted infra</div>
                <p className="text-xs">
                  Run RPCs to reduce dependency on centralized gateways with{" "}
                  <a href="https://start9.com" target="_blank" rel="noopener noreferrer">
                    Start9
                  </a>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-bg/70 p-6 text-sm text-muted">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Risk note
          </div>
          <p className="mt-2">
            This is educational content, not financial advice. Verify sources independently and
            use tools with caution.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Next steps
          </div>
          <p className="mt-2 text-sm text-muted">
            Go deeper with context, timelines, and the latest entries.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/archive" className="text-sm text-accentGold underline">
              View the archive
            </Link>
            <Link href="/timeline" className="text-sm text-accentGold underline">
              Explore the timeline
            </Link>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {featuredEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/event/${event.slug}`}
                className="rounded-xl border border-border bg-bg/70 px-4 py-3 text-sm transition hover:border-accentGold"
              >
                <div className="font-semibold">{event.title}</div>
                <div className="text-xs text-muted">
                  {event.chain} • {event.date}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
