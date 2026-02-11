import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Kit | History of the Trenches",
  description:
    "A guided kit for onboarded traders to deepen custody, research, privacy, and infra skills.",
  alternates: {
    canonical: "https://www.historyofthetrenches.xyz/stack"
  },
  openGraph: {
    title: "Kit | History of the Trenches",
    description:
      "A guided kit for onboarded traders to deepen custody, research, privacy, and infra skills.",
    url: "https://www.historyofthetrenches.xyz/stack",
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

const IconBadge = ({ label, tone = "text-muted" }: { label: string; tone?: string }) => (
  <span
    className={`flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg/80 text-[10px] font-semibold ${tone}`}
  >
    {label}
  </span>
);

export default function StackPage() {
  return (
    <main id="main-content" className="min-h-screen pb-16">
      <NavBar />
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="mb-6 space-y-3">
          <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
            The Kit
          </h1>
          <p className="max-w-3xl text-base text-muted">
            A toolkit bridge for newly‑onboarded traders who want to move from app‑level clicks to
            first‑principles control. Learn the systems, the risks, and the habits that keep you
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
              <CardTitle>Wallets (Hot / KYC &amp; non-KYC)</CardTitle>
              <p className="text-sm text-muted">Clarify where you hold and how you enter.</p>
            </CardHeader>
            <CardContent className="space-y-4 text-[13px] text-muted external-links">
              <div className="rounded-xl border border-border bg-bg/70 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted">Hot wallets</div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="flex items-center gap-2">
                      <IconBadge label="BTC" tone="text-accentGold" />
                      <div className="font-semibold text-fg">
                        <a href="https://sparrowwallet.com" target="_blank" rel="noopener noreferrer">
                          Sparrow (BTC)
                        </a>
                      </div>
                    </div>
                    <p className="text-xs">PSBT + privacy tooling.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="flex items-center gap-2">
                      <IconBadge label="BTC" tone="text-accentGold" />
                      <div className="font-semibold text-fg">
                        <a href="https://wasabiwallet.io" target="_blank" rel="noopener noreferrer">
                          Wasabi (BTC)
                        </a>
                      </div>
                    </div>
                    <p className="text-xs">CoinJoin + Tor support.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="flex items-center gap-2">
                      <IconBadge label="BTC" tone="text-accentGold" />
                      <div className="font-semibold text-fg">
                        <a href="https://electrum.org" target="_blank" rel="noopener noreferrer">
                          Electrum (BTC)
                        </a>
                      </div>
                    </div>
                    <p className="text-xs">Connect to your own node.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="flex items-center gap-2">
                      <IconBadge label="SOL" tone="text-accentGreen" />
                      <div className="font-semibold text-fg">
                        <a href="https://phantom.app" target="_blank" rel="noopener noreferrer">
                          Phantom (Solana)
                        </a>
                      </div>
                    </div>
                    <p className="text-xs">Solana DeFi + NFT wallet.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="flex items-center gap-2">
                      <IconBadge label="XMR" tone="text-muted" />
                      <div className="font-semibold text-fg">
                        <a href="https://www.getmonero.org/downloads/" target="_blank" rel="noopener noreferrer">
                          Monero GUI
                        </a>
                      </div>
                    </div>
                    <p className="text-xs">Privacy by default.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="flex items-center gap-2">
                      <IconBadge label="MULTI" tone="text-fg" />
                      <div className="font-semibold text-fg">
                        <a href="https://trustwallet.com" target="_blank" rel="noopener noreferrer">
                          Trust Wallet
                        </a>
                      </div>
                    </div>
                    <p className="text-xs">Multi‑chain non‑custodial.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="flex items-center gap-2">
                      <IconBadge label="ATOM" tone="text-accentGold" />
                      <div className="font-semibold text-fg">
                        <a href="https://keplr.app" target="_blank" rel="noopener noreferrer">
                          Keplr (Cosmos)
                        </a>
                      </div>
                    </div>
                    <p className="text-xs">Cosmos ecosystem wallet.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="flex items-center gap-2">
                      <IconBadge label="EVM" tone="text-accentRed" />
                      <div className="font-semibold text-fg">
                        <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">
                          MetaMask (EVM)
                        </a>
                      </div>
                    </div>
                    <p className="text-xs">Default EVM wallet.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="flex items-center gap-2">
                      <IconBadge label="EVM" tone="text-accentRed" />
                      <div className="font-semibold text-fg">
                        <a href="https://rabby.io" target="_blank" rel="noopener noreferrer">
                          Rabby (EVM)
                        </a>
                      </div>
                    </div>
                    <p className="text-xs">Power-user EVM wallet.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="flex items-center gap-2">
                      <IconBadge label="SOL" tone="text-accentGreen" />
                      <div className="font-semibold text-fg">
                        <a href="https://solflare.com" target="_blank" rel="noopener noreferrer">
                          Solflare (Solana)
                        </a>
                      </div>
                    </div>
                    <p className="text-xs">Solana-first wallet.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="flex items-center gap-2">
                      <IconBadge label="SOL" tone="text-accentGreen" />
                      <div className="font-semibold text-fg">
                        <a href="https://backpack.app" target="_blank" rel="noopener noreferrer">
                          Backpack (Solana)
                        </a>
                      </div>
                    </div>
                    <p className="text-xs">Solana + xNFT focus.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-bg/70 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted">KYC on-ramps</div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
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
                      <a href="https://www.coinbase.com/exchange" target="_blank" rel="noopener noreferrer">
                        Coinbase Exchange
                      </a>
                    </div>
                    <p className="text-xs">Beginner on‑ramp.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="font-semibold text-fg">
                      <a href="https://www.kucoin.com" target="_blank" rel="noopener noreferrer">
                        KuCoin
                      </a>
                    </div>
                    <p className="text-xs">Wide alt selection.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="font-semibold text-fg">
                      <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer">
                        Binance (Global)
                      </a>
                    </div>
                    <p className="text-xs">Liquidity.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3 md:col-span-2">
                    <div className="font-semibold text-fg">
                      <a href="https://www.gemini.com" target="_blank" rel="noopener noreferrer">
                        Gemini
                      </a>
                    </div>
                    <p className="text-xs">Compliance focused.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="font-semibold text-fg">
                      <a href="https://www.bitstamp.net" target="_blank" rel="noopener noreferrer">
                        Bitstamp
                      </a>
                    </div>
                    <p className="text-xs">Long‑running exchange.</p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="font-semibold text-fg">
                      <a href="https://www.okx.com" target="_blank" rel="noopener noreferrer">
                        OKX
                      </a>
                    </div>
                    <p className="text-xs">Spot + derivatives suite.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-bg/70 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted">Non‑KYC routes</div>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="font-semibold text-fg">Decentralized P2P</div>
                    <p className="text-xs">
                      <a href="https://bisq.network" target="_blank" rel="noopener noreferrer">
                        Bisq
                      </a>
                      ,{" "}
                      <a href="https://hodlhodl.com" target="_blank" rel="noopener noreferrer">
                        Hodl Hodl
                      </a>
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="font-semibold text-fg">Lightning‑first P2P</div>
                    <p className="text-xs">
                      <a href="https://robosats.com" target="_blank" rel="noopener noreferrer">
                        RoboSats
                      </a>
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3 md:col-span-2">
                    <div className="font-semibold text-fg">Social network P2P</div>
                    <p className="text-xs">
                      <a href="https://vexl.it" target="_blank" rel="noopener noreferrer">
                        Vexl
                      </a>
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-bg/60 p-3">
                    <div className="font-semibold text-fg">Non‑KYC exchanges</div>
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
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cold Storage (Self‑Custody)</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-[13px] text-muted md:grid-cols-2 external-links">
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
                  <a href="https://www.ledger.com" target="_blank" rel="noopener noreferrer">
                    Ledger
                  </a>
                </div>
                <p className="text-xs">Mainstream hardware wallet.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://bitbox.swiss/bitbox02/" target="_blank" rel="noopener noreferrer">
                    BitBox02 BTC
                  </a>
                </div>
                <p className="text-xs">Minimalist, Bitcoin‑only.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">
                  <a href="https://foundation.xyz" target="_blank" rel="noopener noreferrer">
                    Foundation Passport
                  </a>
                </div>
                <p className="text-xs">Bitcoin‑first, air‑gapped.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contribute to the Network</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-[13px] text-muted md:grid-cols-2 external-links">
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
                <div className="font-semibold text-fg">Self‑hosted infra</div>
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Infrastructure Toolkit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-[13px] text-muted external-links">
              <div className="grid gap-3 md:grid-cols-2">
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
                    <span className="mr-1 inline-flex align-middle link-icon">DX</span>
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
                <div className="rounded-lg border border-border bg-bg/60 p-3">
                  <div className="font-semibold text-fg">Market intel</div>
                  <p className="text-xs">
                    <a href="https://coinmarketcap.com" target="_blank" rel="noopener noreferrer">CoinMarketCap</a>,{" "}
                    <a href="https://tokenterminal.com" target="_blank" rel="noopener noreferrer">Token Terminal</a>
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-bg/60 p-3 md:col-span-2">
                  <div className="font-semibold text-fg">Developer infra</div>
                  <p className="text-xs">
                    <a href="https://www.alchemy.com" target="_blank" rel="noopener noreferrer">Alchemy</a>,{" "}
                    <a href="https://www.infura.io" target="_blank" rel="noopener noreferrer">Infura</a>,{" "}
                    <a href="https://www.quicknode.com" target="_blank" rel="noopener noreferrer">QuickNode</a>
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-bg/60 p-3 md:col-span-2">
                  <div className="font-semibold text-fg">RPC providers</div>
                  <p className="text-xs">
                    <a href="https://chainstack.com" target="_blank" rel="noopener noreferrer">Chainstack</a>,{" "}
                    <a href="https://drpc.org" target="_blank" rel="noopener noreferrer">dRPC</a>,{" "}
                    <a href="https://getblock.io" target="_blank" rel="noopener noreferrer">GetBlock</a>
                  </p>
                </div>
              </div>

              <div className="grid gap-3 text-[13px] text-muted md:grid-cols-3">
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
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
}
