import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Community | History of the Trenches",
  description: "A cypherpunk toolkit for self-custody, privacy, and technical sovereignty.",
  alternates: {
    canonical: "https://www.historyofthetrenches.xyz/community"
  }
};

export default function CommunityPage() {
  return (
    <main id="main-content" className="min-h-screen pb-16">
      <NavBar />
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-8">
        <div className="mb-6 space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="gold">Community</Badge>
            <Badge variant="muted">Toolkit</Badge>
          </div>
          <h1 className="text-4xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
            The Sovereign Stack
          </h1>
          <p className="max-w-3xl text-base text-muted">
            A cypherpunk‑minded toolkit for self‑custody, privacy, and technical sovereignty.
            Built for builders and newcomers who want to navigate crypto from first principles.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-bg/70 px-4 py-3 text-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Principle</div>
            <div className="text-lg font-semibold text-fg">Verify, don’t trust</div>
          </div>
          <div className="rounded-xl border border-border bg-bg/70 px-4 py-3 text-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Goal</div>
            <div className="text-lg font-semibold text-fg">Sovereignty over convenience</div>
          </div>
          <div className="rounded-xl border border-border bg-bg/70 px-4 py-3 text-sm">
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Signal</div>
            <div className="text-lg font-semibold text-fg">Self‑custody first</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top KYC Wallets &amp; On‑Ramps</CardTitle>
              <p className="text-sm text-muted">
                Use these only for fiat conversion. Always withdraw to self‑custody.
              </p>
            </CardHeader>
            <CardContent className="overflow-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs uppercase text-muted">
                  <tr>
                    <th className="pb-2">Platform</th>
                    <th className="pb-2">Best For</th>
                    <th className="pb-2">Cypherpunk Note</th>
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
                    <td className="py-3">Oldest US exchange, fully KYC.</td>
                  </tr>
                  <tr className="border-t border-border/70">
                    <td className="py-3 font-semibold text-fg">
                      <a href="https://www.coinbase.com/exchange" target="_blank" rel="noopener noreferrer">
                        Coinbase Exchange
                      </a>
                    </td>
                    <td className="py-3">Beginner on‑ramp</td>
                    <td className="py-3">Use for fiat only, withdraw immediately.</td>
                  </tr>
                  <tr className="border-t border-border/70">
                    <td className="py-3 font-semibold text-fg">
                      <a href="https://www.kucoin.com" target="_blank" rel="noopener noreferrer">
                        KuCoin
                      </a>
                    </td>
                    <td className="py-3">Wide alt selection</td>
                    <td className="py-3">Bridge, not storage.</td>
                  </tr>
                  <tr className="border-t border-border/70">
                    <td className="py-3 font-semibold text-fg">
                      <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer">
                        Binance (Global)
                      </a>
                    </td>
                    <td className="py-3">Liquidity</td>
                    <td className="py-3">Convert and exit quickly.</td>
                  </tr>
                  <tr className="border-t border-border/70">
                    <td className="py-3 font-semibold text-fg">
                      <a href="https://www.gemini.com" target="_blank" rel="noopener noreferrer">
                        Gemini
                      </a>
                    </td>
                    <td className="py-3">Compliance focused</td>
                    <td className="py-3">KYC‑bound, treat as a tool.</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Non‑KYC Wallets</CardTitle>
              <p className="text-sm text-muted">True self‑custody. Your keys, your coins.</p>
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
              <CardTitle>Cold Storage (Premium + Budget)</CardTitle>
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
              <CardTitle>Research Toolkit</CardTitle>
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
              <CardTitle>Node &amp; Infrastructure</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted md:grid-cols-2">
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Run a node</div>
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
                <p className="text-xs">Raspberry Pi 5, Intel NUC, or spare laptop.</p>
              </div>
              <div className="rounded-lg border border-border bg-bg/60 p-3">
                <div className="font-semibold text-fg">Self‑hosted</div>
                <p className="text-xs">Run RPCs to reduce dependency on centralized gateways.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-bg/70 p-6 text-sm text-muted">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Disclaimer
          </div>
          <p className="mt-2">
            This is educational content, not financial advice. Verify sources independently and
            use tools with caution.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
