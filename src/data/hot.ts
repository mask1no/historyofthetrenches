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
  // Wallets stay empty until verified public addresses are available.
];

export const ritualReceipts: RitualReceipt[] = [
  // Receipts stay empty until verified transaction links are available.
];

export const hotLinks: HotLinks = {
  communityXUrl: "https://x.com/historytrenches",
  chartUrl: undefined,
  buyUrl: undefined
};
