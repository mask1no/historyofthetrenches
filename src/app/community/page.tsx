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
          <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
            The Stack
          </h1>
          <p className="max-w-3xl text-base text-muted">
            A toolkit bridge for already‑onboarded traders who want to move from app‑level clicks
            to first‑principles control. Learn the systems, the risks, and the habits that keep you
            safe as you go deeper into web3.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-bg/70 px-4 py-3 text-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Principle</div>
            <div className="text-lg font-semibold text-fg">Don’t trust, verify</div>
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
              <CardTitle>Field Ops: Safety + Risk</CardTitle>
              <p className="text-sm text-muted">
                One module to keep you safe and spot bad‑faith memecoin mechanics.
              </p>
            </CardHeader>
            <CardContent className="space-y-5 text-sm text-muted">
              <div className="rounded-xl border border-border bg-bg/60 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted">Operational Safety</div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-border bg-bg/70 p-3">
                    <div className="font-semibold text-fg">Privacy DEX aggregators</div>
                    <p className="text-xs">
                      Tools:{" "}
                      <a href="https://silentswap.com" target="_blank" rel="noopener noreferrer">
                        SilentSwap
                      </a>
                      ,{" "}
                      <a href="https://1inch.io" target="_blank" rel="noopener noreferrer">
                        1inch
                      </a>
                    </p>
                    <p className="text-xs">
                      Privacy‑first routing + best‑price execution. Vet claims; keep wallets clean.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/70 p-3">
                    <div className="font-semibold text-fg">Non‑custodial swap services</div>
                    <p className="text-xs">
                      Tools:{" "}
                      <a href="https://stealthex.io" target="_blank" rel="noopener noreferrer">
                        StealthEX
                      </a>
                      ,{" "}
                      <a href="https://changenow.io" target="_blank" rel="noopener noreferrer">
                        ChangeNOW
                      </a>
                      ,{" "}
                      <a href="https://simpleswap.io" target="_blank" rel="noopener noreferrer">
                        SimpleSwap
                      </a>
                    </p>
                    <p className="text-xs">
                      Account‑free swaps, but KYC can be triggered. Use staggered amounts.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/70 p-3">
                    <div className="font-semibold text-fg">Decentralized P2P exchanges</div>
                    <p className="text-xs">
                      Tools:{" "}
                      <a href="https://bisq.network" target="_blank" rel="noopener noreferrer">
                        Bisq
                      </a>
                      ,{" "}
                      <a href="https://hodlhodl.com" target="_blank" rel="noopener noreferrer">
                        Hodl Hodl
                      </a>
                    </p>
                    <p className="text-xs">
                      Tor‑native and multisig paths. More setup, but strongest privacy posture.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/70 p-3">
                    <div className="font-semibold text-fg">Lightning‑first P2P</div>
                    <p className="text-xs">
                      Tool:{" "}
                      <a href="https://robosats.com" target="_blank" rel="noopener noreferrer">
                        RoboSats
                      </a>
                    </p>
                    <p className="text-xs">
                      Fast and anonymous for small size. Not ideal for large tickets.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/70 p-3 md:col-span-2">
                    <div className="font-semibold text-fg">Social/Personal network P2P</div>
                    <p className="text-xs">
                      Tool:{" "}
                      <a href="https://vexl.it" target="_blank" rel="noopener noreferrer">
                        Vexl
                      </a>
                    </p>
                    <p className="text-xs">
                      Trust‑based trades via web‑of‑trust. Requires a phone number (hashed).
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-bg/60 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted">Memecoin Risk</div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-border bg-bg/70 p-3">
                    <div className="font-semibold text-fg">Flash‑loan providers</div>
                    <p className="text-xs">
                      Can spike prices in seconds without collateral, creating artificial pumps.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/70 p-3">
                    <div className="font-semibold text-fg">MEV bots</div>
                    <p className="text-xs">
                      Front‑running in thin liquidity can move price 10–20% and punish retail entries.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/70 p-3">
                    <div className="font-semibold text-fg">Liquidity sniffers</div>
                    <p className="text-xs">
                      Find pools with extreme price impact that hide traps or mispricing.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/70 p-3">
                    <div className="font-semibold text-fg">Honeypot detectors</div>
                    <p className="text-xs">
                      Surface blocked sells and silent fees that extract value.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/70 p-3">
                    <div className="font-semibold text-fg">Mixers / obfuscators</div>
                    <p className="text-xs">
                      Often used to hide fund trails after a pull; major post‑launch red flag.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/70 p-3">
                    <div className="font-semibold text-fg">Social‑pump bots</div>
                    <p className="text-xs">
                      Coordinated hype can manufacture momentum and exit liquidity.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/70 p-3 md:col-span-2">
                    <div className="font-semibold text-fg">Deploy platforms</div>
                    <p className="text-xs">
                      Fast deploy stacks enable rapid launches; check provenance and audits.
                    </p>
                  </div>
                </div>
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
              <CardTitle>Fiat On‑Ramps (KYC)</CardTitle>
              <p className="text-sm text-muted">
                Use for entry only. Exit to self‑custody fast and keep trading off‑platform.
              </p>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted md:grid-cols-2">
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://www.kraken.com" target="_blank" rel="noopener noreferrer">
                    Kraken
                  </a>
                </div>
                <p className="text-xs">Low fees, advanced trading</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://www.coinbase.com/exchange" target="_blank" rel="noopener noreferrer">
                    Coinbase Exchange
                  </a>
                </div>
                <p className="text-xs">Beginner on‑ramp</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://www.kucoin.com" target="_blank" rel="noopener noreferrer">
                    KuCoin
                  </a>
                </div>
                <p className="text-xs">Wide alt selection</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer">
                    Binance (Global)
                  </a>
                </div>
                <p className="text-xs">Liquidity</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3 md:col-span-2">
                <div className="font-semibold text-fg">
                  <a href="https://www.gemini.com" target="_blank" rel="noopener noreferrer">
                    Gemini
                  </a>
                </div>
                <p className="text-xs">Compliance focused</p>
              </div>
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
