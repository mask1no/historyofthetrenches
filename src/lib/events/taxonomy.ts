const chainCanonicalMap: Record<string, string> = {
  bsc: "BNB Chain",
  "binance smart chain": "BNB Chain",
  bnb: "BNB Chain",
  "eth l2": "Ethereum L2"
};

export const canonicalizeChain = (rawChain: string): string => {
  const normalized = rawChain.trim().toLowerCase();
  return chainCanonicalMap[normalized] ?? rawChain.trim();
};

export const canonicalizeChains = (chains: string[]) =>
  Array.from(new Set(chains.map((chain) => canonicalizeChain(chain))));

