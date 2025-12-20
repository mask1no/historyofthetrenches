import type { Event } from "./events";
import { events } from "./events";

export type Era = {
  id: string;
  title: string;
  range: string;
  description: string;
  featured: Event[];
};

export const eras: Era[] = [
  {
    id: "genesis",
    title: "Genesis & Early Infrastructure",
    range: "2010–2015",
    description: "From pizza payments to early exchange custody lessons and first state regulation.",
    featured: events.filter((e) =>
      ["bitcoin-pizza-day", "silk-road-closure", "mt-gox-bankruptcy", "bitlicense-new-york"].includes(e.slug)
    )
  },
  {
    id: "ico-boom",
    title: "ICO Boom & Fork Debates",
    range: "2016–2018",
    description: "Crowdfunding mania, governance forks, and the rise of mega-exchanges amid early hacks.",
    featured: events.filter((e) =>
      [
        "dao-hack",
        "binance-launch",
        "bitcoin-run-2017",
        "bitconnect-collapse",
        "coincheck-hack",
        "nicehash-hack-2017"
      ].includes(e.slug)
    )
  },
  {
    id: "defi-summer",
    title: "Macro Shock & DeFi Summer",
    range: "2020–2021",
    description: "COVID liquidity shock, on-chain liquidity bootstrapping, and corporate Bitcoin adoption.",
    featured: events.filter((e) =>
      [
        "covid-black-swan",
        "maker-black-thursday",
        "uniswap-v2-launch",
        "yfi-fair-launch",
        "microstrategy-bitcoin-treasury",
        "ethereum-merge"
      ].includes(e.slug)
    )
  },
  {
    id: "nft-onboarding",
    title: "NFT & Onboarding Wave",
    range: "2021",
    description: "Consumer onramps, NFTs, and global policy shifts during peak retail discovery.",
    featured: events.filter((e) =>
      [
        "beeple-sale",
        "opensea-wyvern-exploit",
        "canada-bitcoin-etf",
        "el-salvador-legal-tender",
        "china-mining-ban",
        "dogecoin-run",
        "shiba-inu-run"
      ].includes(e.slug)
    )
  },
  {
    id: "cefi-contagion",
    title: "CeFi Contagion & Bridge Hacks",
    range: "2022–2023",
    description: "Stablecoin stress, lender failures, and bridge exploits reshaping risk perceptions.",
    featured: events.filter((e) =>
      [
        "terra-luna-collapse",
        "celsius-bankruptcy",
        "three-arrows-capital",
        "alameda-balance-sheet-leak",
        "ftx-collapse",
        "blockfi-bankruptcy",
        "voyager-bankruptcy",
        "genesis-bankruptcy",
        "ronin-bridge-hack",
        "nomad-bridge-hack",
        "mango-markets-exploit",
        "wormhole-hack",
        "poly-network-hack",
        "euler-hack",
        "curve-stablepool-exploit",
        "binance-cftc-complaint"
      ].includes(e.slug)
    )
  },
  {
    id: "pump-fun",
    title: "Pump.fun & Meme Liquidity",
    range: "2023–2024",
    description: "Memecoin rails, L2 onboarding, and renewed ETF-driven institutional bridges.",
    featured: events.filter((e) =>
      [
        "pepe-memecoin",
        "bonk-solana",
        "pump-fun-surge",
        "btc-etf-approval",
        "base-mainnet-launch",
        "friend-tech-summer"
      ].includes(e.slug)
    )
  }
];

