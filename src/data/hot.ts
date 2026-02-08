export type CuratorWallet = {
  label: string;
  chain: "solana" | "ethereum" | "other";
  address: string;
  explorerUrl: string;
  purpose: string;
  doxxed?: boolean;
};

export type RitualReceipt = {
  label: string;
  chain: "solana" | "ethereum" | "other";
  date: string;
  txUrl: string;
  note?: string;
  commit?: string;
};

export type HotLinks = {
  communityXUrl: string;
  chartUrl?: string;
  buyUrl?: string;
};

export const curatorWallets: CuratorWallet[] = [
  {
    label: "Curator (Primary)",
    chain: "solana",
    address: "REPLACE_ME",
    explorerUrl: "https://example.com/solana/address/REPLACE_ME",
    purpose: "Primary curator identity wallet (doxxed).",
    doxxed: true
  },
  {
    label: "Treasury",
    chain: "solana",
    address: "REPLACE_ME",
    explorerUrl: "https://example.com/solana/address/REPLACE_ME",
    purpose: "Treasury custody for operational costs."
  },
  {
    label: "Ritual Wallet",
    chain: "solana",
    address: "REPLACE_ME",
    explorerUrl: "https://example.com/solana/address/REPLACE_ME",
    purpose: "Monthly ritual receipts wallet."
  }
];

export const ritualReceipts: RitualReceipt[] = [
  {
    label: "Museum update stamp",
    chain: "solana",
    date: "2026-02-08",
    txUrl: "https://example.com/solana/tx/REPLACE_ME",
    note: "Added transparency upgrades • commit 7ecaeb9",
    commit: "7ecaeb9"
  },
  {
    label: "Treasury top-up",
    chain: "solana",
    date: "2026-01-10",
    txUrl: "https://example.com/solana/tx/REPLACE_ME",
    note: "Monthly ritual buy logged"
  }
];

export const hotLinks: HotLinks = {
  communityXUrl: "https://x.com/historytrenches",
  chartUrl: "https://dexscreener.com/solana/REPLACE_ME",
  buyUrl: undefined
};
