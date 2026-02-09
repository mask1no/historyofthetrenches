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
    label: "Dev",
    chain: "solana",
    address: "REPLACE_ME",
    explorerUrl: "https://example.com/solana/address/REPLACE_ME",
    purpose: "Wallet that created the memecoin.",
    doxxed: true
  },
  {
    label: "Public",
    chain: "solana",
    address: "REPLACE_ME",
    explorerUrl: "https://example.com/solana/address/REPLACE_ME",
    purpose: "Wallet used for monthly buys ($100 each month).",
    doxxed: true
  },
  {
    label: "Burn",
    chain: "solana",
    address: "REPLACE_ME",
    explorerUrl: "https://example.com/solana/address/REPLACE_ME",
    purpose:
      "Burn triggers only on new milestones (no dips/re-hits). Buy and burn 1% of supply at each +100k market cap milestone (100k, 200k, 300k, etc.).",
    doxxed: true
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
