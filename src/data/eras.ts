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
    id: "silk-road",
    title: "Silk Road Era",
    range: "2011–2013",
    description: "Bitcoin's early notoriety through darknet markets and custody shocks.",
    featured: events.filter((e) =>
      ["silk-road-closure", "mt-gox-bankruptcy"].includes(e.slug)
    )
  },
  {
    id: "ico-boom",
    title: "ICO Boom",
    range: "2017",
    description: "Crowdfunding mania and pioneering governance debates.",
    featured: events.filter((e) =>
      ["bitconnect-collapse", "dao-hack", "binance-launch", "bitcoin-run-2017"].includes(e.slug)
    )
  },
  {
    id: "covid-black-swan",
    title: "COVID-19 Black Swan",
    range: "2020",
    description: "Macro shock that reset liquidity and opened a new cohort of on-chain participants.",
    featured: events.filter((e) =>
      ["covid-black-swan", "uniswap-v2-launch", "yfi-fair-launch"].includes(e.slug)
    )
  },
  {
    id: "defi-summer",
    title: "DeFi Summer",
    range: "2020–2022",
    description: "On-chain liquidity experiments and the first major stablecoin stress tests.",
    featured: events.filter((e) =>
      [
        "terra-luna-collapse",
        "ftx-collapse",
        "celsius-bankruptcy",
        "three-arrows-capital",
        "ronin-bridge-hack",
        "alameda-balance-sheet-leak",
        "ethereum-merge"
      ].includes(e.slug)
    )
  },
  {
    id: "nft-summer",
    title: "NFT Summer",
    range: "2021",
    description: "Culture meets blockchains; meme and community tokens go mainstream.",
    featured: events.filter((e) =>
      ["dogecoin-run", "shiba-inu-run", "opensea-wyvern-exploit"].includes(e.slug)
    )
  },
  {
    id: "pump-fun",
    title: "Pump.fun Era",
    range: "2024–",
    description: "Instant launches, viral liquidity, and rapid community spins.",
    featured: events.filter((e) =>
      ["squid-game-token", "pepe-memecoin", "bonk-solana", "pump-fun-surge", "btc-etf-approval"].includes(e.slug)
    )
  }
];

