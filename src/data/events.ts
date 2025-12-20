export type EventType = "rugpull" | "runner" | "milestone" | "hack";

export type Source = {
  label: string;
  url: string;
  publisher: string;
  year: number;
};

export type Event = {
  slug: string;
  title: string;
  type: EventType;
  chain: string;
  year: number;
  date: string; // exact historical date
  era: string;
  summary: string;
  tags: string[];
  peakMetric?: string;
  outcome?: string;
  hallOfFame?: boolean;
  status?: string;
  sources: Source[];
  chartUrl?: string;
};

export const events: Event[] = [
  {
    slug: "silk-road-closure",
    title: "Silk Road Marketplace Closure",
    type: "milestone",
    chain: "Bitcoin",
    year: 2013,
    date: "2013-10-02",
    era: "Silk Road Era",
    status: "law enforcement",
    summary:
      "Legendary darknet market seized by authorities, cementing Bitcoin's early reputation and triggering debates on privacy.",
    peakMetric: "100k+ listings",
    outcome: "Operator arrested; BTC auctioned",
    tags: ["bitcoin", "policy", "darknet"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "FBI press release on seizure",
        url: "https://www.justice.gov/usao-sdny/pr/manhattan-us-attorney-announces-seizure-additional-28000-bitcoins-belongs-silk-road",
        publisher: "DOJ",
        year: 2013
      },
      {
        label: "US Marshals Bitcoin auction recap",
        url: "https://www.justice.gov/opa/pr/us-marshals-service-sells-29657-bitcoins-silk-road-auction",
        publisher: "DOJ",
        year: 2014
      }
    ]
  },
  {
    slug: "mt-gox-bankruptcy",
    title: "Mt. Gox Collapse",
    type: "rugpull",
    chain: "Bitcoin",
    year: 2014,
    date: "2014-02-28",
    era: "Silk Road Era",
    hallOfFame: true,
    status: "exchange hack",
    summary:
      "Once the largest Bitcoin exchange, Mt. Gox collapsed after losing ~850k BTC, shaping early exchange security norms.",
    peakMetric: "70% BTC volume share",
    outcome: "Long rehabilitation process",
    tags: ["bitcoin", "custody", "exchange"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Bankruptcy filing announcement",
        url: "https://www.wsj.com/articles/SB10001424052702304834704579403550776300800",
        publisher: "WSJ",
        year: 2014
      },
      {
        label: "Mt. Gox rehabilitation update",
        url: "https://www.mtgox.com/img/pdf/20180322_announcingthepolicy_en.pdf",
        publisher: "Mt. Gox Trustee",
        year: 2018
      }
    ]
  },
  {
    slug: "dao-hack",
    title: "The DAO Hack",
    type: "hack",
    chain: "Ethereum",
    year: 2016,
    date: "2016-06-17",
    era: "ICO Boom",
    status: "hard fork decision",
    summary:
      "Smart contract exploit drained a major DAO, leading to Ethereum's contentious hard fork and the birth of Ethereum Classic.",
    peakMetric: "$150M ETH at risk",
    outcome: "Ethereum/ETC split",
    tags: ["governance", "security"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      {
        label: "The DAO post-mortem",
        url: "https://blog.slock.it/a-brief-history-of-the-dao-hack-6f04038c0f6b",
        publisher: "Slock.it",
        year: 2016
      },
      {
        label: "Ethereum Foundation hard fork announcement",
        url: "https://blog.ethereum.org/2016/07/20/hard-fork-completed",
        publisher: "Ethereum Foundation",
        year: 2016
      }
    ]
  },
  {
    slug: "binance-launch",
    title: "Binance Exchange Launch",
    type: "hack",
    chain: "Multi-chain",
    year: 2017,
    date: "2017-07-14",
    era: "ICO Boom",
    status: "exchange growth",
    summary: "CZ launches Binance, pioneering fast listings and BNB utility within a rapidly growing exchange.",
    peakMetric: "Top global spot volume",
    outcome: "Exchange dominance",
    tags: ["exchange", "bnb", "cefi"],
    chartUrl: "https://tradingview.com/symbols/BNBUSD/",
    sources: [
      {
        label: "Launch announcement",
        url: "https://www.coindesk.com/markets/2017/07/14/binance-exchange-opens-after-ico-raises-15-million/",
        publisher: "CoinDesk",
        year: 2017
      },
      {
        label: "BNB whitepaper utility section",
        url: "https://www.binance.com/resources/ico/binance_ico_whitepaper_en.pdf",
        publisher: "Binance",
        year: 2017
      }
    ]
  },
  {
    slug: "bitconnect-collapse",
    title: "Bitconnect Collapse",
    type: "rugpull",
    chain: "Multi-chain",
    year: 2018,
    date: "2018-01-17",
    era: "ICO Boom",
    hallOfFame: true,
    status: "pyramid unwind",
    summary:
      "High-yield lending platform imploded after regulators issued warnings, leading to a 90%+ price crash.",
    peakMetric: "Top 20 market cap",
    outcome: "Founders charged; token delisted",
    tags: ["lending", "ico", "regulation"],
    chartUrl: "https://tradingview.com/symbols/BCCUSD/",
    sources: [
      {
        label: "Texas Securities Board cease and desist",
        url: "https://www.ssb.texas.gov/news-publications/texas-securities-commissioner-enters-emergency-cease-and-desist-order-bitconnect",
        publisher: "Texas SSB",
        year: 2018
      },
      {
        label: "Bitconnect shutdown report",
        url: "https://www.coindesk.com/markets/2018/01/17/bitconnect-shuts-down-exchange-platform-after-cease-and-desist-orders/",
        publisher: "CoinDesk",
        year: 2018
      }
    ]
  },
  {
    slug: "bitcoin-run-2017",
    title: "Bitcoin 2017 Bull Run",
    type: "runner",
    chain: "Bitcoin",
    year: 2017,
    date: "2017-12-17",
    era: "ICO Boom",
    hallOfFame: true,
    status: "macro adoption",
    summary: "Bitcoin reached ~$20k amid ICO mania, drawing global retail attention.",
    peakMetric: "$20k ATH",
    outcome: "Set benchmark for later cycles",
    tags: ["bitcoin", "macro", "runner"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Bitcoin passes $20k",
        url: "https://www.coindesk.com/markets/2017/12/17/bitcoin-price-passes-20000/",
        publisher: "CoinDesk",
        year: 2017
      },
      {
        label: "2017 bull market retrospective",
        url: "https://a16zcrypto.com/content/article/the-2017-crypto-bubble-what-we-learned/",
        publisher: "a16z crypto",
        year: 2018
      }
    ]
  },
  {
    slug: "coinbase-onboarding-2017",
    title: "Coinbase App Onboarding Boom",
    type: "hack",
    chain: "Multi-chain",
    year: 2017,
    date: "2017-12-01",
    era: "ICO Boom",
    status: "retail onboarding",
    summary: "Coinbase hit the top of app stores during the 2017 rush, becoming the default retail gateway.",
    peakMetric: "#1 App Store finance app",
    outcome: "Mainstream visibility",
    tags: ["exchange", "onboarding", "retail"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Coinbase tops App Store",
        url: "https://techcrunch.com/2017/12/07/coinbase-is-the-1-app-in-the-ios-app-store/",
        publisher: "TechCrunch",
        year: 2017
      },
      {
        label: "2017 user growth stats",
        url: "https://blog.coinbase.com/2017-a-remarkable-year-for-coinbase-and-cryptocurrency-cfd2d9b0f4ef",
        publisher: "Coinbase",
        year: 2018
      }
    ]
  },
  {
    slug: "covid-black-swan",
    title: "COVID-19 Black Swan",
    type: "hack",
    chain: "Multi-chain",
    year: 2020,
    date: "2020-03-12",
    era: "DeFi Summer",
    status: "macro shock",
    summary: "Global markets crashed; BTC briefly fell below $4k before recovering, catalyzing new entrants.",
    peakMetric: "-50% intraday BTC drawdown",
    outcome: "Liquidity shock then recovery",
    tags: ["macro", "black-swan"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      { label: "Market crash recap", url: "https://www.ft.com/content/64a5d2e4-63c6-11ea-b3f3-fe4680ea68b5", publisher: "Financial Times", year: 2020 },
      { label: "On-chain panic analysis", url: "https://insights.glassnode.com/bitcoin-market-crash-march-2020", publisher: "Glassnode", year: 2020 }
    ]
  },
  {
    slug: "uniswap-v2-launch",
    title: "Uniswap V2 Launch",
    type: "hack",
    chain: "Ethereum",
    year: 2020,
    date: "2020-05-18",
    era: "DeFi Summer",
    status: "dex upgrade",
    summary: "Uniswap V2 introduced direct ERC-20 pairs and oracles, accelerating AMM adoption.",
    peakMetric: "Rapid TVL climb",
    outcome: "Set AMM standard",
    tags: ["dex", "amm", "defi"],
    chartUrl: "https://tradingview.com/symbols/UNIUSD/",
    sources: [
      { label: "Launch post", url: "https://uniswap.org/blog/uniswap-v2", publisher: "Uniswap", year: 2020 },
      { label: "AMM impact study", url: "https://www.gemini.com/cryptopedia/amm-uniswap-v2", publisher: "Gemini Cryptopedia", year: 2021 }
    ]
  },
  {
    slug: "yfi-fair-launch",
    title: "YFI Fair Launch",
    type: "hack",
    chain: "Ethereum",
    year: 2020,
    date: "2020-07-17",
    era: "DeFi Summer",
    status: "fair launch",
    summary: "Yearn introduced a zero-premine, governance-first token that became a DeFi cultural pillar.",
    peakMetric: "$40k token peak",
    outcome: "Set fair launch precedent",
    tags: ["defi", "governance", "fair-launch"],
    chartUrl: "https://tradingview.com/symbols/YFIUSD/",
    sources: [
      { label: "Launch post", url: "https://medium.com/iearn/yfi-distribution-df60226a40af", publisher: "Yearn", year: 2020 },
      { label: "Fair launch analysis", url: "https://messari.io/report/yfi-yearn-finance", publisher: "Messari", year: 2020 }
    ]
  },
  {
    slug: "terra-luna-collapse",
    title: "Terra/Luna Collapse",
    type: "rugpull",
    chain: "Terra",
    year: 2022,
    date: "2022-05-09",
    era: "DeFi Summer",
    hallOfFame: true,
    status: "stablecoin failure",
    summary:
      "Algorithmic stablecoin UST lost its peg, causing a death spiral that erased tens of billions in value.",
    peakMetric: "$60B ecosystem TVL",
    outcome: "Chain forked; legal probes",
    tags: ["stablecoin", "defi", "systemic-risk"],
    chartUrl: "https://tradingview.com/symbols/LUNAUSD/",
    sources: [
      {
        label: "UST depeg coverage",
        url: "https://www.coindesk.com/markets/2022/05/09/terrass-ust-stablecoin-slides-to-098-as-market-ponders-reserve-risk/",
        publisher: "CoinDesk",
        year: 2022
      },
      {
        label: "Luna collapse explainer",
        url: "https://www.nytimes.com/2022/05/18/technology/terra-luna-crypto-crash.html",
        publisher: "NYTimes",
        year: 2022
      }
    ]
  },
  {
    slug: "celsius-bankruptcy",
    title: "Celsius Bankruptcy",
    type: "rugpull",
    chain: "CeFi",
    year: 2022,
    date: "2022-07-13",
    era: "DeFi Summer",
    status: "insolvency",
    summary:
      "Lending platform froze withdrawals citing extreme market conditions before filing for Chapter 11.",
    peakMetric: "$20B peak assets",
    outcome: "Bankruptcy proceedings",
    tags: ["cefi", "lending", "bankruptcy"],
    chartUrl: "https://tradingview.com/symbols/CELUSD/",
    sources: [
      {
        label: "Celsius withdrawal pause",
        url: "https://blog.celsius.network/a-memo-to-the-celsius-community-59532a06ecc6",
        publisher: "Celsius",
        year: 2022
      },
      {
        label: "Bankruptcy filing coverage",
        url: "https://www.reuters.com/legal/celsius-network-files-bankruptcy-protection-2022-07-14/",
        publisher: "Reuters",
        year: 2022
      }
    ]
  },
  {
    slug: "three-arrows-capital",
    title: "Three Arrows Capital Collapse",
    type: "rugpull",
    chain: "Multi-chain",
    year: 2022,
    date: "2022-06-27",
    era: "DeFi Summer",
    status: "fund insolvency",
    summary:
      "Hedge fund failed to meet margin calls after leveraged bets, triggering forced liquidations across lenders.",
    peakMetric: "$10B AUM peak",
    outcome: "Liquidation ordered",
    tags: ["fund", "leverage", "bankruptcy"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "3AC liquidation order",
        url: "https://www.ft.com/content/28f8b0b3-5f3b-4b7a-9aaf-8d9b9dc32d2d",
        publisher: "Financial Times",
        year: 2022
      },
      {
        label: "Leverage unwind recap",
        url: "https://www.bloomberg.com/news/articles/2022-06-29/crypto-hedge-fund-three-arrows-capital-ordered-to-liquidate",
        publisher: "Bloomberg",
        year: 2022
      }
    ]
  },
  {
    slug: "alameda-balance-sheet-leak",
    title: "Alameda Balance Sheet Leak",
    type: "hack",
    chain: "CeFi",
    year: 2022,
    date: "2022-11-02",
    era: "DeFi Summer",
    status: "contagion catalyst",
    summary:
      "Leaked financials showed heavy FTT collateral reliance, triggering market stress that preceded FTX collapse.",
    peakMetric: "Billions in illiquid FTT",
    outcome: "Liquidity crisis; run on FTX",
    tags: ["cefi", "contagion", "ftt"],
    chartUrl: "https://tradingview.com/symbols/FTTUSD/",
    sources: [
      { label: "Leak coverage", url: "https://www.coindesk.com/business/2022/11/02/alameda-balance-sheet-holds-billions-of-ftx-token-ftt/", publisher: "CoinDesk", year: 2022 },
      { label: "Market reaction", url: "https://www.bloomberg.com/news/articles/2022-11-06/binance-s-bnb-ftt-token-sale-triggers-crypto-market-selloff", publisher: "Bloomberg", year: 2022 }
    ]
  },
  {
    slug: "ftx-collapse",
    title: "FTX Exchange Collapse",
    type: "rugpull",
    chain: "CeFi",
    year: 2022,
    date: "2022-11-11",
    era: "DeFi Summer",
    hallOfFame: true,
    status: "custodial failure",
    summary:
      "One of the largest centralized exchanges filed for bankruptcy after liquidity crunch and alleged misuse of funds.",
    peakMetric: "$32B private valuation",
    outcome: "Bankruptcy; asset clawbacks underway",
    tags: ["cefi", "custody", "bankruptcy"],
    chartUrl: "https://tradingview.com/symbols/FTTUSD/",
    sources: [
      {
        label: "FTX Chapter 11 filing",
        url: "https://www.reuters.com/markets/us/crypto-exchange-ftx-files-bankruptcy-ceo-bankman-fried-resigns-2022-11-11/",
        publisher: "Reuters",
        year: 2022
      },
      {
        label: "Post-mortem timeline",
        url: "https://www.coindesk.com/learn/ftx-collapse-timeline-what-happened-to-sam-bankman-frieds-crypto-empire/",
        publisher: "CoinDesk",
        year: 2022
      }
    ]
  },
  {
    slug: "ronin-bridge-hack",
    title: "Axie Infinity Ronin Bridge Hack",
    type: "hack",
    chain: "Ethereum/Sidechain",
    year: 2022,
    date: "2022-03-23",
    era: "DeFi Summer",
    status: "bridge exploit",
    summary:
      "Attackers stole over $600M in ETH/USDC from the Ronin bridge via compromised validator keys.",
    peakMetric: "$600M loss",
    outcome: "Bridge rebuilt; partial restitution",
    tags: ["bridge", "security", "gaming"],
    chartUrl: "https://tradingview.com/symbols/AXSUSD/",
    sources: [
      {
        label: "Ronin post-mortem",
        url: "https://forum.axieinfinity.com/t/ronin-network-postmortem/100",
        publisher: "Sky Mavis",
        year: 2022
      },
      {
        label: "US Treasury attribution",
        url: "https://home.treasury.gov/news/press-releases/jy0701",
        publisher: "US Treasury",
        year: 2022
      }
    ]
  },
  {
    slug: "opensea-wyvern-exploit",
    title: "OpenSea Wyvern Exploit",
    type: "hack",
    chain: "Ethereum",
    year: 2022,
    date: "2022-02-20",
    era: "NFT Summer",
    status: "marketplace exploit",
    summary:
      "Attackers used stale listings to purchase NFTs below market, exposing marketplace approval risks.",
    peakMetric: "$1.7M estimated losses",
    outcome: "Listings migrated; user restitution",
    tags: ["nft", "marketplace", "security"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      { label: "Incident recap", url: "https://www.theverge.com/2022/2/20/22943819/opensea-phishing-attack-nfts-stolen", publisher: "The Verge", year: 2022 },
      { label: "Security analysis", url: "https://opensea.io/blog/announcements/securing-opensea-users-against-phishing-attacks/", publisher: "OpenSea", year: 2022 }
    ]
  },
  {
    slug: "ethereum-merge",
    title: "Ethereum Merge",
    type: "hack",
    chain: "Ethereum",
    year: 2022,
    date: "2022-09-15",
    era: "DeFi Summer",
    status: "protocol upgrade",
    summary:
      "Ethereum transitioned from Proof of Work to Proof of Stake, reducing energy consumption and changing issuance.",
    peakMetric: "Energy use down ~99%",
    outcome: "PoS live; PoW forked",
    tags: ["protocol", "upgrade", "ethereum"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      {
        label: "Ethereum Merge announcement",
        url: "https://blog.ethereum.org/2022/08/24/mainnet-merge-announcement",
        publisher: "Ethereum Foundation",
        year: 2022
      },
      {
        label: "Energy impact analysis",
        url: "https://www.iea.org/commentaries/ethereum-s-merge-impacts-electricity-use",
        publisher: "IEA",
        year: 2022
      }
    ]
  },
  {
    slug: "coinbase-ipo",
    title: "Coinbase NASDAQ Listing",
    type: "hack",
    chain: "Multi-chain",
    year: 2021,
    date: "2021-04-14",
    era: "NFT Summer",
    status: "public listing",
    summary: "The largest US exchange debuted via direct listing, signaling institutional recognition.",
    peakMetric: "$100B intraday valuation",
    outcome: "Cemented exchange legitimacy",
    tags: ["exchange", "ipo", "regulation"],
    chartUrl: "https://tradingview.com/symbols/COIN/",
    sources: [
      {
        label: "Coinbase direct listing day",
        url: "https://www.cnbc.com/2021/04/14/coinbase-ipo-coin-starts-trading-on-nasdaq.html",
        publisher: "CNBC",
        year: 2021
      },
      {
        label: "Coinbase S-1 filing",
        url: "https://www.sec.gov/Archives/edgar/data/0001679788/000162828021002161/coinbaseglobalincs-1.htm",
        publisher: "SEC",
        year: 2021
      }
    ]
  },
  {
    slug: "beeple-sale",
    title: "Beeple $69M NFT Sale",
    type: "milestone",
    chain: "Ethereum",
    year: 2021,
    date: "2021-03-11",
    era: "NFT Summer",
    status: "auction record",
    summary: "Christie's sold Beeple's 'Everydays' for $69M, igniting mainstream NFT awareness.",
    peakMetric: "$69M hammer price",
    outcome: "Mainstream NFT attention",
    tags: ["nft", "art", "auction"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      {
        label: "Christie's sale result",
        url: "https://www.christies.com/features/Everydays-The-First-5000-Days-11510-7.aspx",
        publisher: "Christie's",
        year: 2021
      },
      {
        label: "Market reaction",
        url: "https://www.bbc.com/news/technology-56371912",
        publisher: "BBC",
        year: 2021
      }
    ]
  },
  {
    slug: "dogecoin-run",
    title: "Dogecoin Meme Run",
    type: "runner",
    chain: "Multi-chain",
    year: 2021,
    date: "2021-05-08",
    era: "NFT Summer",
    hallOfFame: true,
    status: "community-driven",
    summary:
      "Originally a joke, Dogecoin rallied on viral momentum, tipping culture, and social amplification.",
    peakMetric: "$0.73 ATH",
    outcome: "Sustained memecoin presence",
    tags: ["meme", "community"],
    chartUrl: "https://tradingview.com/symbols/DOGEUSD/",
    sources: [
      { label: "Price surge recap", url: "https://www.cnbc.com/2021/05/08/dogecoin-price-surges-ahead-of-elon-musks-snl-appearance.html", publisher: "CNBC", year: 2021 },
      { label: "Community history", url: "https://www.coindesk.com/markets/2021/05/04/dogecoin-hits-new-high-as-traders-bet-on-more-gains/", publisher: "CoinDesk", year: 2021 }
    ]
  },
  {
    slug: "shiba-inu-run",
    title: "Shiba Inu Ascent",
    type: "runner",
    chain: "Ethereum",
    year: 2021,
    date: "2021-10-27",
    era: "NFT Summer",
    hallOfFame: true,
    status: "community + defi",
    summary:
      "SHIB rallied through community marketing, exchange listings, and the launch of ShibaSwap ecosystem.",
    peakMetric: "$40B peak FDV",
    outcome: "Ecosystem expansion",
    tags: ["meme", "defi", "community"],
    chartUrl: "https://tradingview.com/symbols/SHIBUSD/",
    sources: [
      {
        label: "Exchange listing timeline",
        url: "https://www.coindesk.com/markets/2021/10/08/shiba-inu-surges-after-coinbase-listing/",
        publisher: "CoinDesk",
        year: 2021
      },
      {
        label: "Ecosystem growth recap",
        url: "https://decrypt.co/84519/shiba-inu-ecosystem",
        publisher: "Decrypt",
        year: 2021
      }
    ]
  },
  {
    slug: "squid-game-token",
    title: "Squid Game Token Rugpull",
    type: "rugpull",
    chain: "BSC",
    year: 2021,
    date: "2021-11-01",
    era: "Pump.fun Era",
    hallOfFame: true,
    status: "exit liquidity spike",
    summary:
      "Token inspired by the TV show rocketed then crashed after developers drained liquidity and vanished.",
    peakMetric: "23,000% run-up pre-rug",
    outcome: "Liquidity removed; trading halted",
    tags: ["meme", "bsc", "rugpull"],
    chartUrl: "https://dexscreener.com/bsc/squid",
    sources: [
      { label: "Post-mortem analysis", url: "https://www.bbc.com/news/business-59129466", publisher: "BBC", year: 2021 },
      { label: "Exchange halt notice", url: "https://www.cnbc.com/2021/11/02/squid-game-crypto-scam-sqwid-coin-plunges.html", publisher: "CNBC", year: 2021 }
    ]
  },
  {
    slug: "pepe-memecoin",
    title: "PEPE Meme Rally",
    type: "runner",
    chain: "Ethereum",
    year: 2023,
    date: "2023-04-18",
    era: "Pump.fun Era",
    hallOfFame: true,
    status: "viral",
    summary:
      "PEPE captured the 2023 meme cycle with rapid exchange listings and high on-chain volume.",
    peakMetric: "$1.6B market cap",
    outcome: "Continues trading",
    tags: ["meme", "defi"],
    chartUrl: "https://dexscreener.com/ethereum/pepe",
    sources: [
      { label: "Volume breakout", url: "https://www.coindesk.com/markets/2023/04/18/pepe-meme-coin-surges/", publisher: "CoinDesk", year: 2023 },
      { label: "Listing timeline", url: "https://www.theblock.co/post/230305/pepe-memecoin-surges-coinbase", publisher: "The Block", year: 2023 }
    ]
  },
  {
    slug: "bonk-solana",
    title: "BONK on Solana",
    type: "runner",
    chain: "Solana",
    year: 2023,
    date: "2023-12-08",
    era: "Pump.fun Era",
    hallOfFame: true,
    status: "ecosystem revival",
    summary:
      "Dog-themed token airdropped to builders, energizing Solana sentiment after a deep drawdown.",
    peakMetric: "3000%+ from lows",
    outcome: "Integrated across Solana dapps",
    tags: ["solana", "meme", "airdrop"],
    chartUrl: "https://dexscreener.com/solana/bonk",
    sources: [
      { label: "Airdrop breakdown", url: "https://www.coindesk.com/markets/2023/01/05/bonk-soars-as-solana-ecosystem-seeks-relief/", publisher: "CoinDesk", year: 2023 },
      { label: "Ecosystem integrations", url: "https://www.theblock.co/post/198251/bonk-airdrop-boosts-solana-nfts", publisher: "The Block", year: 2024 }
    ]
  },
  {
    slug: "pump-fun-surge",
    title: "Pump.fun Era Emerges",
    type: "milestone",
    chain: "Solana",
    year: 2024,
    date: "2024-03-15",
    era: "Pump.fun Era",
    status: "launchpad",
    summary: "Ultra-fast memecoin launch tooling popularized instant liquidity and viral spins.",
    peakMetric: "Thousands of tokens/day",
    outcome: "New launch pattern",
    tags: ["solana", "launchpad", "meme"],
    chartUrl: "https://dexscreener.com/solana",
    sources: [
      { label: "Platform stats", url: "https://www.coindesk.com/markets/2024/03/20/solana-token-launchpad-pumpfun-trading/", publisher: "CoinDesk", year: 2024 },
      { label: "Community recap", url: "https://decrypt.co/222522/pump-fun-meme-coin-mania", publisher: "Decrypt", year: 2024 }
    ]
  },
  {
    slug: "btc-etf-approval",
    title: "Bitcoin Spot ETF Approvals",
    type: "milestone",
    chain: "Bitcoin",
    year: 2024,
    date: "2024-01-10",
    era: "Pump.fun Era",
    status: "regulatory",
    summary: "US regulators approved multiple spot BTC ETFs, opening institutional rails for direct exposure.",
    peakMetric: "Record first-week inflows",
    outcome: "Expanded institutional access",
    tags: ["regulation", "etf", "bitcoin"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      { label: "SEC approval", url: "https://www.sec.gov/news/press-release/2024-4", publisher: "SEC", year: 2024 },
      { label: "Inflows recap", url: "https://www.bloomberg.com/news/articles/2024-01-11/bitcoin-etf-debut-sees-astonishing-first-day-volume", publisher: "Bloomberg", year: 2024 }
    ]
  },
  {
    slug: "safemoon-drain",
    title: "SafeMoon Liquidity Drain",
    type: "rugpull",
    chain: "BSC",
    year: 2021,
    date: "2021-03-29",
    era: "DeFi Summer",
    hallOfFame: false,
    status: "long unraveling",
    summary:
      "Controversial reflections token faced exploits, treasury drains, and lawsuits over locked liquidity promises.",
    peakMetric: "$5B+ FDV peak",
    outcome: "Ongoing legal actions",
    tags: ["reflections", "bsc", "controversial"],
    chartUrl: "https://dexscreener.com/bsc/safemoon",
    sources: [
      { label: "Exploit coverage", url: "https://www.coindesk.com/tech/2023/03/29/safemoon-token-suffers-9m-exploit/", publisher: "CoinDesk", year: 2023 },
      { label: "Class action filing", url: "https://www.reuters.com/legal/transaction/safemoon-investors-sue-celebs-over-alleged-crypto-fraud-2022-02-18/", publisher: "Reuters", year: 2022 }
    ]
  },
  {
    slug: "bitcoin-whitepaper",
    title: "Bitcoin Whitepaper Published",
    type: "milestone",
    chain: "Bitcoin",
    year: 2008,
    date: "2008-10-31",
    era: "Genesis",
    status: "protocol design",
    summary: "Satoshi Nakamoto released the Bitcoin whitepaper, outlining peer-to-peer electronic cash and trustless consensus.",
    outcome: "Open-source release",
    tags: ["bitcoin", "protocol", "whitepaper"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      { label: "Bitcoin whitepaper", url: "https://bitcoin.org/bitcoin.pdf", publisher: "Satoshi Nakamoto", year: 2008 },
      { label: "Mailing list post", url: "https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html", publisher: "Cryptography ML", year: 2008 }
    ]
  },
  {
    slug: "ethereum-ico-launch",
    title: "Ethereum ICO Launch",
    type: "milestone",
    chain: "Ethereum",
    year: 2014,
    date: "2014-07-22",
    era: "ICO Boom",
    status: "crowdfund",
    summary: "Ethereum raised funds via token presale, catalyzing the smart contract platform era and setting the ICO template.",
    peakMetric: "$18M equivalent raise",
    outcome: "Mainnet shipped 2015",
    tags: ["ico", "smart-contracts", "ethereum"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      { label: "Presale announcement", url: "https://blog.ethereum.org/2014/07/22/launch-ethereum-presale", publisher: "Ethereum Foundation", year: 2014 },
      { label: "ICO recap", url: "https://www.coindesk.com/markets/2016/07/07/ethereum-ico-returns-what-ether-investors-earned/", publisher: "CoinDesk", year: 2016 }
    ]
  },
  {
    slug: "cryptokitties-congestion",
    title: "CryptoKitties Chain Congestion",
    type: "milestone",
    chain: "Ethereum",
    year: 2017,
    date: "2017-12-05",
    era: "NFT Summer",
    status: "network stress",
    summary: "Viral NFT game CryptoKitties clogged Ethereum, highlighting fee markets and the need for scaling solutions.",
    peakMetric: "20k+ daily tx from game",
    outcome: "Gas spikes; scaling urgency",
    tags: ["nft", "scaling", "gaming"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      { label: "Network stats", url: "https://www.coindesk.com/markets/2017/12/04/cryptokitties-are-slowing-down-ethereum/", publisher: "CoinDesk", year: 2017 },
      { label: "Press coverage", url: "https://techcrunch.com/2017/12/06/cryptokitties-explodes-ethereum/", publisher: "TechCrunch", year: 2017 }
    ]
  },
  {
    slug: "compound-yield-farming",
    title: "Compound Launches Yield Farming",
    type: "milestone",
    chain: "Ethereum",
    year: 2020,
    date: "2020-06-15",
    era: "DeFi Summer",
    status: "token incentives",
    summary: "COMP distribution sparked the first major yield farming wave, bootstrapping on-chain liquidity and composability playbooks.",
    peakMetric: "$600M+ TVL within weeks",
    outcome: "DeFi Summer ignition",
    tags: ["defi", "liquidity", "governance"],
    chartUrl: "https://tradingview.com/symbols/COMPUSD/",
    sources: [
      { label: "Launch post", url: "https://medium.com/compound-finance/compound-community-governance-3c3b0b0e3cf0", publisher: "Compound", year: 2020 },
      { label: "DeFi recap", url: "https://bankless.ghost.io/defi-summer", publisher: "Bankless", year: 2020 }
    ]
  },
  {
    slug: "axie-p2e-peak",
    title: "Axie Infinity Play-to-Earn Peak",
    type: "runner",
    chain: "Ethereum/Sidechain",
    year: 2021,
    date: "2021-08-01",
    era: "NFT Summer",
    status: "gaming adoption",
    summary: "Axie Infinity's play-to-earn model onboarded millions, driving sidechain activity and debate on sustainable token economies.",
    peakMetric: "$4B+ lifetime NFT volume",
    outcome: "Model tested; growth slowed",
    tags: ["gaming", "nft", "p2e"],
    chartUrl: "https://tradingview.com/symbols/AXSUSD/",
    sources: [
      { label: "Marketplace stats", url: "https://dappradar.com/blog/axie-infinity-surpasses-4-billion-in-nft-sales", publisher: "DappRadar", year: 2022 },
      { label: "Ecosystem recap", url: "https://www.theblock.co/post/116206/axie-infinity-growth", publisher: "The Block", year: 2021 }
    ]
  },
  {
    slug: "base-mainnet-launch",
    title: "Base Mainnet Launch",
    type: "milestone",
    chain: "Ethereum L2",
    year: 2023,
    date: "2023-08-09",
    era: "Pump.fun Era",
    status: "l2 launch",
    summary: "Coinbase launched Base on OP Stack, accelerating consumer onramps and L2 adoption with low-fee social apps.",
    peakMetric: "1M+ daily tx bursts",
    outcome: "New L2 liquidity venue",
    tags: ["l2", "onboarding", "infrastructure"],
    chartUrl: "https://l2beat.com/scaling/projects/base",
    sources: [
      { label: "Launch post", url: "https://base.mirror.xyz/D_mxn6Qk4qzM7gc3KJ2YMBX1IzBgE4c3OJbGdv8ImZE", publisher: "Base", year: 2023 },
      { label: "Usage stats", url: "https://l2beat.com/scaling/projects/base", publisher: "L2Beat", year: 2023 }
    ]
  },
  {
    slug: "bitcoin-ordinals-launch",
    title: "Bitcoin Ordinals Minting Launch",
    type: "milestone",
    chain: "Bitcoin",
    year: 2023,
    date: "2023-01-21",
    era: "Pump.fun Era",
    status: "protocol experiment",
    summary: "Ordinals enabled NFT-like inscriptions on Bitcoin, driving fee spikes and reigniting debates on blockspace usage.",
    peakMetric: "200k+ inscriptions in early weeks",
    outcome: "New Bitcoin blockspace demand",
    tags: ["bitcoin", "nft", "infrastructure"],
    chartUrl: "https://mempool.space",
    sources: [
      { label: "Ordinals docs", url: "https://docs.ordinals.com/", publisher: "Ordinals", year: 2023 },
      { label: "Fee market analysis", url: "https://www.theblock.co/post/206388/ordinals-drive-bitcoin-fees", publisher: "The Block", year: 2023 }
    ]
  },
  {
    slug: "friend-tech-summer",
    title: "Friend.tech Social Token Summer",
    type: "runner",
    chain: "Base",
    year: 2023,
    date: "2023-08-12",
    era: "Pump.fun Era",
    status: "social trading",
    summary: "Friend.tech popularized social trading keys on Base, showcasing L2 onboarding and viral fee generation.",
    peakMetric: "$1M+ protocol fees/day",
    outcome: "Copycats and debates on sustainability",
    tags: ["socialfi", "l2", "onboarding"],
    chartUrl: "https://dune.com",
    sources: [
      { label: "Protocol dashboard", url: "https://dune.com/dgtl_assets/friendtech", publisher: "Dune", year: 2023 },
      { label: "Coverage", url: "https://decrypt.co/154307/friend-tech-everything-need-know", publisher: "Decrypt", year: 2023 }
    ]
  },
  {
    slug: "sbf-trial-verdict",
    title: "SBF Trial Verdict",
    type: "milestone",
    chain: "CeFi",
    year: 2023,
    date: "2023-11-02",
    era: "Pump.fun Era",
    status: "legal outcome",
    summary: "A federal jury convicted FTX founder Sam Bankman-Fried on fraud and conspiracy charges, closing a key chapter of CeFi contagion.",
    outcome: "Convicted on all counts",
    tags: ["legal", "cefi", "ftx"],
    chartUrl: "https://tradingview.com/symbols/FTTUSD/",
    sources: [
      { label: "Verdict coverage", url: "https://www.nytimes.com/2023/11/02/technology/sbf-verdict.html", publisher: "NYTimes", year: 2023 },
      { label: "Regulatory recap", url: "https://www.reuters.com/legal/ftx-founder-bankman-fried-found-guilty-us-fraud-trial-2023-11-02/", publisher: "Reuters", year: 2023 }
    ]
  },
  {
    slug: "bitfinex-hack",
    title: "Bitfinex Hack",
    type: "milestone",
    chain: "Bitcoin",
    year: 2016,
    date: "2016-08-02",
    era: "ICO Boom",
    status: "exchange hack",
    summary: "Hackers stole ~120k BTC from Bitfinex, prompting socialized losses and tokenized IOUs (BFX).",
    peakMetric: "120k BTC stolen",
    outcome: "Partial recovery; arrests in 2022",
    tags: ["exchange", "security", "bitcoin"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Hack report",
        url: "https://www.coindesk.com/markets/2016/08/03/bitfinex-bitcoin-exchange-loses-65-million-to-hackers/",
        publisher: "CoinDesk",
        year: 2016
      },
      {
        label: "Arrest announcement",
        url: "https://www.justice.gov/opa/pr/two-arrested-alleged-conspiracy-launder-45-billion-stolen-cryptocurrency",
        publisher: "DOJ",
        year: 2022
      }
    ]
  },
  {
    slug: "parity-multisig-freeze",
    title: "Parity Multisig Freeze",
    type: "milestone",
    chain: "Ethereum",
    year: 2017,
    date: "2017-11-06",
    era: "ICO Boom",
    status: "contract bug",
    summary: "A library self-destruct call froze ~$150M in multisig wallets, highlighting upgradeability risks.",
    peakMetric: "$150M frozen",
    outcome: "Funds permanently locked",
    tags: ["security", "ethereum", "multisig"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      {
        label: "Incident summary",
        url: "https://www.parity.io/blog/november-2017-incident-report",
        publisher: "Parity",
        year: 2017
      },
      {
        label: "Community recap",
        url: "https://www.coindesk.com/markets/2017/11/07/150-million-in-ether-frozen-due-to-parity-wallet-bug/",
        publisher: "CoinDesk",
        year: 2017
      }
    ]
  },
  {
    slug: "yam-finance-bug",
    title: "YAM Finance Launch Bug",
    type: "milestone",
    chain: "Ethereum",
    year: 2020,
    date: "2020-08-12",
    era: "DeFi Summer",
    status: "governance bug",
    summary: "A governance bug in the rebasing token locked treasury funds, showcasing DeFi launch risks.",
    peakMetric: "$600M TVL pre-bug",
    outcome: "V2 relaunch",
    tags: ["defi", "governance", "bug"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      {
        label: "Post-mortem",
        url: "https://medium.com/yam-finance/yam-post-rescue-attempt-9793f28f0a0f",
        publisher: "Yam Finance",
        year: 2020
      },
      {
        label: "Coverage",
        url: "https://www.theblock.co/post/76077/yam-yfi-defi-bug",
        publisher: "The Block",
        year: 2020
      }
    ]
  },
  {
    slug: "poly-network-hack",
    title: "Poly Network Hack",
    type: "milestone",
    chain: "Multi-chain",
    year: 2021,
    date: "2021-08-10",
    era: "NFT Summer",
    status: "bridge exploit",
    summary: "Cross-chain protocol hacked for $600M+, later largely returned by the attacker dubbed 'Mr. White Hat'.",
    peakMetric: "$600M exploit",
    outcome: "Funds returned, contracts patched",
    tags: ["bridge", "security", "defi"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      {
        label: "Exploit announcement",
        url: "https://www.coindesk.com/tech/2021/08/10/poly-network-loses-600m-in-largest-defi-hack-ever/",
        publisher: "CoinDesk",
        year: 2021
      },
      {
        label: "Funds returned",
        url: "https://www.theverge.com/2021/8/23/22638108/poly-network-cryptocurrency-hack-610-million-returned",
        publisher: "The Verge",
        year: 2021
      }
    ]
  },
  {
    slug: "wormhole-hack",
    title: "Wormhole Bridge Hack",
    type: "milestone",
    chain: "Solana/Ethereum",
    year: 2022,
    date: "2022-02-02",
    era: "DeFi Summer",
    status: "bridge exploit",
    summary: "A smart contract vulnerability allowed minting of 120k wETH; Jump Crypto backstopped losses.",
    peakMetric: "120k wETH exploited",
    outcome: "Jump replenished funds",
    tags: ["bridge", "security", "solana"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      {
        label: "Incident thread",
        url: "https://twitter.com/wormholecrypto/status/1489038176512888834",
        publisher: "Wormhole",
        year: 2022
      },
      {
        label: "Backstop announcement",
        url: "https://jumpcrypto.com/wormhole-incident-response/",
        publisher: "Jump Crypto",
        year: 2022
      }
    ]
  },
  {
    slug: "maker-black-thursday",
    title: "MakerDAO Black Thursday",
    type: "milestone",
    chain: "Ethereum",
    year: 2020,
    date: "2020-03-12",
    era: "DeFi Summer",
    status: "liquidation failure",
    summary: "Oracle and gas issues let bidders win vault liquidations for 0 DAI, undercollateralizing the system.",
    peakMetric: "$5M undercollateralized",
    outcome: "Debt auction and upgrades",
    tags: ["defi", "liquidations", "governance"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      {
        label: "Incident analysis",
        url: "https://blog.makerdao.com/the-market-collapse-of-march-12-2020-what-happened-and-what-should-we-learn-from-it/",
        publisher: "MakerDAO",
        year: 2020
      },
      {
        label: "Community recap",
        url: "https://medium.com/@brianmct/the-makerdao-black-thursday-debacle-explained-20f9a2af6f63",
        publisher: "Community",
        year: 2020
      }
    ]
  },
  {
    slug: "tornado-sanctions",
    title: "Tornado Cash Sanctions",
    type: "milestone",
    chain: "Ethereum",
    year: 2022,
    date: "2022-08-08",
    era: "DeFi Summer",
    status: "sanctions",
    summary: "OFAC sanctioned Tornado Cash smart contracts, sparking debates on code as speech and censorship.",
    peakMetric: "Sanctioned addresses on-chain",
    outcome: "Frontends geoblocked; dev arrested",
    tags: ["privacy", "regulation", "sanctions"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      {
        label: "OFAC press release",
        url: "https://home.treasury.gov/news/press-releases/jy0916",
        publisher: "US Treasury",
        year: 2022
      },
      {
        label: "Context",
        url: "https://www.theblock.co/post/163111/us-treasury-sanctions-crypto-mixer-tornado-cash",
        publisher: "The Block",
        year: 2022
      }
    ]
  },
  {
    slug: "arbitrum-airdrop",
    title: "Arbitrum Airdrop",
    type: "milestone",
    chain: "Ethereum L2",
    year: 2023,
    date: "2023-03-23",
    era: "Pump.fun Era",
    status: "airdrop",
    summary: "Arbitrum distributed ARB governance tokens to early users, cementing L2 airdrop playbooks.",
    peakMetric: "2.3B ARB distributed",
    outcome: "DAO launched",
    tags: ["airdrop", "l2", "governance"],
    chartUrl: "https://tradingview.com/symbols/ARBUSD/",
    sources: [
      {
        label: "Airdrop announcement",
        url: "https://arbitrum.foundation/blog/arbitrum-airdrop",
        publisher: "Arbitrum Foundation",
        year: 2023
      },
      {
        label: "Launch day coverage",
        url: "https://www.coindesk.com/business/2023/03/23/arbitrum-token-gets-off-to-rocky-start-as-airdrop-goes-live/",
        publisher: "CoinDesk",
        year: 2023
      }
    ]
  },
  {
    slug: "op-stack-launch",
    title: "OP Stack Announced",
    type: "milestone",
    chain: "Ethereum L2",
    year: 2022,
    date: "2022-10-18",
    era: "Pump.fun Era",
    status: "infrastructure",
    summary: "Optimism open-sourced the OP Stack, enabling shared sequencer rollups and multi-chain governance vision.",
    peakMetric: "Multiple L2s building",
    outcome: "Ecosystem adoption",
    tags: ["l2", "infrastructure", "governance"],
    chartUrl: "https://l2beat.com/scaling/projects/optimism",
    sources: [
      {
        label: "OP Stack announcement",
        url: "https://optimism.mirror.xyz/7TZGi99Z0eKCbFf8g_LuwZQzQ_EimeISBuYn0ZqzD7Y",
        publisher: "Optimism",
        year: 2022
      },
      {
        label: "Ecosystem explainer",
        url: "https://www.coinbase.com/blog/building-with-optimisms-op-stack",
        publisher: "Coinbase",
        year: 2023
      }
    ]
  },
  {
    slug: "sepolia-merge",
    title: "Sepolia Testnet Merge",
    type: "milestone",
    chain: "Ethereum",
    year: 2022,
    date: "2022-07-06",
    era: "DeFi Summer",
    status: "testnet upgrade",
    summary: "Ethereum's Sepolia testnet successfully transitioned to Proof of Stake, a key Merge rehearsal.",
    peakMetric: "Testnet PoS activation",
    outcome: "Paved way for mainnet Merge",
    tags: ["ethereum", "testnet", "upgrade"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      {
        label: "Merge rehearsal",
        url: "https://www.theblock.co/post/157923/ethereum-merge-sepolia-testnet",
        publisher: "The Block",
        year: 2022
      },
      {
        label: "Developer recap",
        url: "https://blog.ethereum.org/2022/07/08/sepolia-merge-success",
        publisher: "Ethereum Foundation",
        year: 2022
      }
    ]
  },
  {
    slug: "bch-hard-fork",
    title: "Bitcoin Cash Hard Fork",
    type: "milestone",
    chain: "Bitcoin",
    year: 2017,
    date: "2017-08-01",
    era: "ICO Boom",
    status: "chain split",
    summary: "Block size debate led to Bitcoin Cash hard fork, creating a persistent chain split over scalability.",
    peakMetric: "BCH launched with 8MB blocks",
    outcome: "Dual-chain ecosystem",
    tags: ["bitcoin", "fork", "scaling"],
    chartUrl: "https://tradingview.com/symbols/BCHUSD/",
    sources: [
      {
        label: "Fork coverage",
        url: "https://www.coindesk.com/markets/2017/08/01/bitcoin-cash-has-launched-heres-what-that-means/",
        publisher: "CoinDesk",
        year: 2017
      },
      {
        label: "Background debate",
        url: "https://blog.bitcoin.com/bitcoin-cash-hard-fork-august-1st-2017/",
        publisher: "Bitcoin.com",
        year: 2017
      }
    ]
  },
  {
    slug: "elon-bitcoin-tweet",
    title: "Elon Musk Suspends BTC Payments",
    type: "milestone",
    chain: "Bitcoin",
    year: 2021,
    date: "2021-05-12",
    era: "NFT Summer",
    status: "corporate policy",
    summary: "Tesla halted Bitcoin payments citing environmental concerns, triggering a sharp market drawdown.",
    peakMetric: "BTC -10% intraday",
    outcome: "Reignited energy debates",
    tags: ["bitcoin", "macro", "corporate"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Tesla statement",
        url: "https://twitter.com/elonmusk/status/1392602041025843203",
        publisher: "Twitter",
        year: 2021
      },
      {
        label: "Market impact",
        url: "https://www.cnbc.com/2021/05/13/bitcoin-tumbles-after-elon-musk-says-tesla-will-stop-accepting-crypto-for-cars.html",
        publisher: "CNBC",
        year: 2021
      }
    ]
  },
  {
    slug: "eth-london-upgrade",
    title: "London Upgrade (EIP-1559)",
    type: "milestone",
    chain: "Ethereum",
    year: 2021,
    date: "2021-08-05",
    era: "NFT Summer",
    status: "protocol upgrade",
    summary: "EIP-1559 introduced basefee burn, changing gas mechanics and setting precedent for supply dynamics.",
    peakMetric: "ETH burn live",
    outcome: "Fee market reform",
    tags: ["ethereum", "upgrade", "eip1559"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      {
        label: "EIP-1559 explainer",
        url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/eip-1559/",
        publisher: "Ethereum.org",
        year: 2021
      },
      {
        label: "Activation coverage",
        url: "https://www.coindesk.com/markets/2021/08/05/ethereum-upgrade-eip-1559-goes-live/",
        publisher: "CoinDesk",
        year: 2021
      }
    ]
  },
  {
    slug: "solana-outage-2022",
    title: "Solana Major Outage",
    type: "milestone",
    chain: "Solana",
    year: 2022,
    date: "2022-06-01",
    era: "DeFi Summer",
    status: "network halt",
    summary: "A durable nonce bug halted Solana block production for hours, requiring validator coordination to restart.",
    peakMetric: "7-hour downtime",
    outcome: "Patch and restart",
    tags: ["solana", "reliability", "infrastructure"],
    chartUrl: "https://tradingview.com/symbols/SOLUSD/",
    sources: [
      {
        label: "Outage report",
        url: "https://status.solana.com/incidents/rc5l5l6s8drs",
        publisher: "Solana Status",
        year: 2022
      },
      {
        label: "Coverage",
        url: "https://www.theblock.co/post/150468/solana-mainnet-beta-outage-durable-nonce-transaction-feature",
        publisher: "The Block",
        year: 2022
      }
    ]
  },
  {
    slug: "apeswap-safemoon-exploit",
    title: "BSC ApeSwap / SafeMoon Exploit",
    type: "rugpull",
    chain: "BSC",
    year: 2023,
    date: "2023-03-28",
    era: "Pump.fun Era",
    status: "liquidity exploit",
    summary: "A vulnerability in SafeMoon's LP locking upgrade was exploited, draining millions before patching.",
    peakMetric: "$9M drained",
    outcome: "Team applied hotfix",
    tags: ["bsc", "security", "liquidity"],
    chartUrl: "https://dexscreener.com/bsc/safemoon",
    sources: [
      {
        label: "Exploit coverage",
        url: "https://www.coindesk.com/tech/2023/03/29/safemoon-token-suffers-9m-exploit/",
        publisher: "CoinDesk",
        year: 2023
      },
      {
        label: "Audit note",
        url: "https://rekt.news/safemoon-rekt/",
        publisher: "Rekt News",
        year: 2023
      }
    ]
  },
  {
    slug: "bitcoin-pizza-day",
    title: "Bitcoin Pizza Day Purchase",
    type: "milestone",
    chain: "Bitcoin",
    year: 2010,
    date: "2010-05-22",
    era: "Genesis",
    status: "early commerce",
    summary: "First known commercial Bitcoin transaction exchanged 10,000 BTC for two pizzas, marking real-world usage.",
    tags: ["bitcoin", "commerce", "culture"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Bitcointalk post",
        url: "https://bitcointalk.org/index.php?topic=137.msg1195#msg1195",
        publisher: "Bitcointalk",
        year: 2010
      },
      {
        label: "Origin story",
        url: "https://bitcoinmagazine.com/culture/bitcoin-pizza-day-origin-story",
        publisher: "Bitcoin Magazine",
        year: 2021
      }
    ]
  },
  {
    slug: "bitlicense-new-york",
    title: "New York BitLicense Introduced",
    type: "milestone",
    chain: "Multi-chain",
    year: 2015,
    date: "2015-06-03",
    era: "Silk Road Era",
    status: "regulation",
    summary: "NYDFS launched the BitLicense framework, setting one of the first comprehensive state crypto regulations.",
    tags: ["regulation", "compliance", "nydfs"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "BitLicense announcement",
        url: "https://www.dfs.ny.gov/about/press/pr1506031.htm",
        publisher: "NYDFS",
        year: 2015
      },
      {
        label: "Industry coverage",
        url: "https://www.coindesk.com/markets/2015/06/03/new-york-finalizes-bitlicense-regulations/",
        publisher: "CoinDesk",
        year: 2015
      }
    ]
  },
  {
    slug: "nicehash-hack-2017",
    title: "NiceHash Wallet Breach",
    type: "hack",
    chain: "Multi-chain",
    year: 2017,
    date: "2017-12-06",
    era: "ICO Boom",
    status: "exchange hack",
    summary: "Mining marketplace NiceHash lost ~4,700 BTC after its payment system was compromised.",
    tags: ["security", "exchange", "mining"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Incident notice",
        url: "https://www.nicehash.com/blog/post/security-breach-on-nicehash",
        publisher: "NiceHash",
        year: 2017
      },
      {
        label: "Press coverage",
        url: "https://www.bloomberg.com/news/articles/2017-12-07/bitcoin-mining-marketplace-nicehash-says-its-paying-system-hacked",
        publisher: "Bloomberg",
        year: 2017
      }
    ]
  },
  {
    slug: "coincheck-hack",
    title: "Coincheck NEM Hack",
    type: "hack",
    chain: "NEM",
    year: 2018,
    date: "2018-01-26",
    era: "ICO Boom",
    status: "exchange hack",
    summary: "Japanese exchange Coincheck lost $530M in NEM after hot wallet compromise, triggering stronger oversight.",
    tags: ["exchange", "security", "nem"],
    chartUrl: "https://tradingview.com/symbols/XEMUSD/",
    sources: [
      {
        label: "Company statement",
        url: "https://coincheck.com/en/blog/4671",
        publisher: "Coincheck",
        year: 2018
      },
      {
        label: "Hack coverage",
        url: "https://www.bloomberg.com/news/articles/2018-01-26/coincheck-says-cryptocurrency-worth-400-million-hacked",
        publisher: "Bloomberg",
        year: 2018
      }
    ]
  },
  {
    slug: "quadriga-collapse",
    title: "QuadrigaCX Collapse",
    type: "rugpull",
    chain: "CeFi",
    year: 2019,
    date: "2019-02-05",
    era: "Silk Road Era",
    status: "custodial failure",
    summary: "Canadian exchange collapsed after founder's death left keys inaccessible, freezing ~$190M in assets.",
    peakMetric: "$190M frozen",
    outcome: "OSC deemed it a fraud",
    tags: ["custody", "cefi", "bankruptcy"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Founder death report",
        url: "https://www.cbc.ca/news/canada/nova-scotia/quadriga-ceo-death-gerald-cotten-1.5008753",
        publisher: "CBC",
        year: 2019
      },
      {
        label: "OSC review",
        url: "https://www.osc.ca/en/news-events/news/quadriga-cx-trading-platform-oscs-review",
        publisher: "OSC",
        year: 2020
      }
    ]
  },
  {
    slug: "microstrategy-bitcoin-treasury",
    title: "MicroStrategy Bitcoin Treasury Allocation",
    type: "milestone",
    chain: "Bitcoin",
    year: 2020,
    date: "2020-08-11",
    era: "DeFi Summer",
    status: "treasury strategy",
    summary: "MicroStrategy adopted Bitcoin as primary treasury reserve, catalyzing corporate treasury interest.",
    peakMetric: "$250M initial purchase",
    outcome: "Ongoing BTC accumulation",
    tags: ["bitcoin", "corporate", "treasury"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Press release",
        url: "https://www.microstrategy.com/en/investor-relations/press/microstrategy-adopts-bitcoin-as-primary-treasury-reserve-asset",
        publisher: "MicroStrategy",
        year: 2020
      },
      {
        label: "WSJ coverage",
        url: "https://www.wsj.com/articles/microstrategy-bitcoin-11600259073",
        publisher: "WSJ",
        year: 2020
      }
    ]
  },
  {
    slug: "canada-bitcoin-etf",
    title: "First Bitcoin ETF (Canada)",
    type: "milestone",
    chain: "Bitcoin",
    year: 2021,
    date: "2021-02-18",
    era: "NFT Summer",
    status: "etf launch",
    summary: "Purpose Bitcoin ETF (BTCC) launched in Canada, the first physically settled Bitcoin ETF globally.",
    tags: ["etf", "bitcoin", "regulation"],
    chartUrl: "https://www.purposeinvest.com/funds/purpose-bitcoin-etf",
    sources: [
      {
        label: "ETF launch coverage",
        url: "https://www.bloomberg.com/news/articles/2021-02-12/world-s-first-bitcoin-etf-set-to-launch-in-canada",
        publisher: "Bloomberg",
        year: 2021
      },
      {
        label: "Fund page",
        url: "https://www.purposeinvest.com/funds/purpose-bitcoin-etf",
        publisher: "Purpose",
        year: 2021
      }
    ]
  },
  {
    slug: "el-salvador-legal-tender",
    title: "El Salvador Adopts Bitcoin as Legal Tender",
    type: "milestone",
    chain: "Bitcoin",
    year: 2021,
    date: "2021-09-07",
    era: "NFT Summer",
    status: "legal tender",
    summary: "El Salvador made Bitcoin legal tender alongside USD, launching the Chivo wallet and BTC-backed bonds plans.",
    tags: ["bitcoin", "policy", "legal"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "NYT coverage",
        url: "https://www.nytimes.com/2021/09/07/world/americas/bitcoin-el-salvador.html",
        publisher: "NYTimes",
        year: 2021
      },
      {
        label: "IMF commentary",
        url: "https://blog.imf.org/2021/07/26/cryptoassets-as-national-currency-a-step-too-far/",
        publisher: "IMF",
        year: 2021
      }
    ]
  },
  {
    slug: "china-mining-ban",
    title: "China Mining Ban Escalates",
    type: "milestone",
    chain: "Bitcoin",
    year: 2021,
    date: "2021-06-18",
    era: "NFT Summer",
    status: "regulation",
    summary: "China intensified its crackdown on Bitcoin mining, causing hashrate to plunge and operations to relocate globally.",
    tags: ["mining", "regulation", "bitcoin"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Regulatory coverage",
        url: "https://www.reuters.com/technology/china-tightens-cryptocurrency-mining-ban-2021-06-18/",
        publisher: "Reuters",
        year: 2021
      },
      {
        label: "Hashrate drop report",
        url: "https://www.coindesk.com/markets/2021/06/21/bitcoin-hashrate-drops-as-chinas-mining-operations-shut/",
        publisher: "CoinDesk",
        year: 2021
      }
    ]
  },
  {
    slug: "badgerdao-exploit",
    title: "BadgerDAO Front-end Exploit",
    type: "hack",
    chain: "Ethereum",
    year: 2021,
    date: "2021-12-02",
    era: "DeFi Summer",
    status: "front-end attack",
    summary: "Malicious script on BadgerDAO front-end drained ~$120M from user approvals before being halted.",
    peakMetric: "$120M affected",
    outcome: "Contracts paused; restitution plan",
    tags: ["defi", "security", "front-end"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Incident coverage",
        url: "https://www.coindesk.com/tech/2021/12/02/badgerdao-losses-may-top-120m-after-suspected-front-end-attack/",
        publisher: "CoinDesk",
        year: 2021
      },
      {
        label: "Post-mortem",
        url: "https://badgerdao.medium.com/post-mortem-badgerdao-incident-2021-bf8b7c3f8e6",
        publisher: "BadgerDAO",
        year: 2021
      }
    ]
  },
  {
    slug: "nomad-bridge-hack",
    title: "Nomad Bridge Exploit",
    type: "hack",
    chain: "Multi-chain",
    year: 2022,
    date: "2022-08-01",
    era: "DeFi Summer",
    status: "bridge exploit",
    summary: "Nomad bridge vulnerability let users copy the attacker’s transaction, draining ~$190M in a free-for-all.",
    peakMetric: "$190M drained",
    outcome: "Partial funds returned",
    tags: ["bridge", "security", "multichain"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      {
        label: "Exploit recap",
        url: "https://www.theblock.co/post/161386/nomad-bridge-exploit",
        publisher: "The Block",
        year: 2022
      },
      {
        label: "Project update",
        url: "https://nomad.xyz/blog/nomad-bridge-incident-update",
        publisher: "Nomad",
        year: 2022
      }
    ]
  },
  {
    slug: "mango-markets-exploit",
    title: "Mango Markets Price Manipulation",
    type: "hack",
    chain: "Solana",
    year: 2022,
    date: "2022-10-11",
    era: "DeFi Summer",
    status: "oracle manipulation",
    summary: "Attacker manipulated MNGO price to drain ~$114M from Mango Markets; later negotiated partial return.",
    peakMetric: "$114M drained",
    outcome: "Funds partially returned; charges filed",
    tags: ["defi", "oracle", "solana"],
    chartUrl: "https://tradingview.com/symbols/MNGOUSD/",
    sources: [
      {
        label: "Exploit coverage",
        url: "https://www.coindesk.com/markets/2022/10/12/solana-defi-exchange-mango-markets-drained-of-over-100m/",
        publisher: "CoinDesk",
        year: 2022
      },
      {
        label: "Incident forum",
        url: "https://forum.mango.markets/t/incident-oct-11-2022/181",
        publisher: "Mango DAO",
        year: 2022
      }
    ]
  },
  {
    slug: "blockfi-bankruptcy",
    title: "BlockFi Bankruptcy",
    type: "rugpull",
    chain: "CeFi",
    year: 2022,
    date: "2022-11-28",
    era: "DeFi Summer",
    status: "bankruptcy",
    summary: "Lender BlockFi filed for Chapter 11 after FTX collapse crippled its credit line and liquidity.",
    tags: ["cefi", "bankruptcy", "lending"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Filing coverage",
        url: "https://www.nytimes.com/2022/11/28/business/blockfi-bankruptcy-ftx.html",
        publisher: "NYTimes",
        year: 2022
      },
      {
        label: "Court filing",
        url: "https://restructuring.ra.kroll.com/blockfi",
        publisher: "Kroll",
        year: 2022
      }
    ]
  },
  {
    slug: "voyager-bankruptcy",
    title: "Voyager Digital Bankruptcy",
    type: "rugpull",
    chain: "CeFi",
    year: 2022,
    date: "2022-07-06",
    era: "DeFi Summer",
    status: "bankruptcy",
    summary: "Crypto lender Voyager filed Chapter 11 after 3AC default, freezing customer assets.",
    tags: ["cefi", "bankruptcy", "lending"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Bankruptcy filing coverage",
        url: "https://www.reuters.com/business/finance/crypto-lender-voyager-digital-files-bankruptcy-2022-07-06/",
        publisher: "Reuters",
        year: 2022
      },
      {
        label: "Court docs",
        url: "https://cases.stretto.com/voyager",
        publisher: "Stretto",
        year: 2022
      }
    ]
  },
  {
    slug: "genesis-bankruptcy",
    title: "Genesis Global Bankruptcy",
    type: "rugpull",
    chain: "CeFi",
    year: 2023,
    date: "2023-01-19",
    era: "DeFi Summer",
    status: "bankruptcy",
    summary: "Institutional lender Genesis filed for Chapter 11 after losses from 3AC and FTX contagion.",
    tags: ["cefi", "bankruptcy", "institutional"],
    chartUrl: "https://tradingview.com/symbols/BTCUSD/",
    sources: [
      {
        label: "Bankruptcy report",
        url: "https://www.bloomberg.com/news/articles/2023-01-19/crypto-lender-genesis-is-said-to-prepare-to-file-for-bankruptcy",
        publisher: "Bloomberg",
        year: 2023
      },
      {
        label: "Court docket",
        url: "https://restructuring.ra.kroll.com/genesis",
        publisher: "Kroll",
        year: 2023
      }
    ]
  },
  {
    slug: "euler-hack",
    title: "Euler Finance Hack",
    type: "hack",
    chain: "Ethereum",
    year: 2023,
    date: "2023-03-13",
    era: "DeFi Summer",
    status: "flash loan exploit",
    summary: "Lending protocol Euler lost nearly $200M via a flash-loan attack; attacker later returned major funds.",
    peakMetric: "$197M exploited",
    outcome: "Funds mostly returned",
    tags: ["defi", "flash-loan", "security"],
    chartUrl: "https://tradingview.com/symbols/ETHUSD/",
    sources: [
      {
        label: "Hack coverage",
        url: "https://www.coindesk.com/tech/2023/03/13/euler-finance-hacked-for-nearly-200m/",
        publisher: "CoinDesk",
        year: 2023
      },
      {
        label: "Incident analysis",
        url: "https://forum.euler.finance/t/incident-analysis/",
        publisher: "Euler",
        year: 2023
      }
    ]
  },
  {
    slug: "curve-stablepool-exploit",
    title: "Curve Stable Pools Exploit",
    type: "hack",
    chain: "Ethereum",
    year: 2023,
    date: "2023-07-30",
    era: "DeFi Summer",
    status: "amm exploit",
    summary: "Vyper compiler bug led to reentrancy exploits on Curve stable pools, draining tens of millions before patches.",
    peakMetric: "$60M impacted",
    outcome: "Whitehat returns and DAO coverage",
    tags: ["defi", "amm", "security"],
    chartUrl: "https://tradingview.com/symbols/CRVUSD/",
    sources: [
      {
        label: "Exploit coverage",
        url: "https://www.theblock.co/post/241508/curve-finance-pools-exploited",
        publisher: "The Block",
        year: 2023
      },
      {
        label: "Project response",
        url: "https://curve.substack.com/p/curve-response-to-vyper-compiler-vulnerabilities",
        publisher: "Curve",
        year: 2023
      }
    ]
  },
  {
    slug: "binance-cftc-complaint",
    title: "Binance CFTC Enforcement",
    type: "milestone",
    chain: "CeFi",
    year: 2023,
    date: "2023-03-27",
    era: "DeFi Summer",
    status: "regulatory action",
    summary: "US CFTC filed a civil enforcement action against Binance and CZ alleging derivatives violations.",
    tags: ["regulation", "cefi", "enforcement"],
    chartUrl: "https://tradingview.com/symbols/BNBUSD/",
    sources: [
      {
        label: "CFTC press release",
        url: "https://www.cftc.gov/PressRoom/PressReleases/8680-23",
        publisher: "CFTC",
        year: 2023
      },
      {
        label: "Coverage",
        url: "https://www.reuters.com/technology/binance-ceo-zhao-sued-by-cftc-over-trading-violations-2023-03-27/",
        publisher: "Reuters",
        year: 2023
      }
    ]
  }
];

export const getEventBySlug = (slug: string) =>
  events.find((event) => event.slug === slug);
