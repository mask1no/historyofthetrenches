export type EventType = "rugpull" | "runner" | "milestone";

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
      { label: "FBI seizure notice", url: "https://example.com/source", publisher: "FBI", year: 2013 },
      { label: "Auction coverage", url: "https://example.com/source", publisher: "Financial Times", year: 2014 }
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
      { label: "Bankruptcy filing", url: "https://example.com/source", publisher: "Court Docs", year: 2014 },
      { label: "Asset recovery updates", url: "https://example.com/source", publisher: "Trustee Reports", year: 2023 }
    ]
  },
  {
    slug: "dao-hack",
    title: "The DAO Hack",
    type: "milestone",
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
      { label: "Exploit write-up", url: "https://example.com/source", publisher: "Security Lab", year: 2016 },
      { label: "Hard fork vote", url: "https://example.com/source", publisher: "Community Blog", year: 2016 }
    ]
  },
  {
    slug: "binance-launch",
    title: "Binance Exchange Launch",
    type: "milestone",
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
      { label: "Launch blog", url: "https://example.com/source", publisher: "Binance", year: 2017 },
      { label: "Early volume data", url: "https://example.com/source", publisher: "Data Provider", year: 2017 }
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
      { label: "Regulatory notice", url: "https://example.com/source", publisher: "Texas Securities Board", year: 2018 },
      { label: "Price collapse coverage", url: "https://example.com/source", publisher: "CoinPress", year: 2018 }
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
      { label: "ATH coverage", url: "https://example.com/source", publisher: "Major Press", year: 2017 },
      { label: "Cycle recap", url: "https://example.com/source", publisher: "Research Desk", year: 2018 }
    ]
  },
  {
    slug: "coinbase-onboarding-2017",
    title: "Coinbase App Onboarding Boom",
    type: "milestone",
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
      { label: "App store rank", url: "https://example.com/source", publisher: "App Annie", year: 2017 },
      { label: "User growth recap", url: "https://example.com/source", publisher: "Coinbase Blog", year: 2018 }
    ]
  },
  {
    slug: "covid-black-swan",
    title: "COVID-19 Black Swan",
    type: "milestone",
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
      { label: "Market crash recap", url: "https://example.com/source", publisher: "Financial Times", year: 2020 },
      { label: "On-chain panic analysis", url: "https://example.com/source", publisher: "Analytics Firm", year: 2020 }
    ]
  },
  {
    slug: "uniswap-v2-launch",
    title: "Uniswap V2 Launch",
    type: "milestone",
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
      { label: "Launch post", url: "https://example.com/source", publisher: "Uniswap", year: 2020 },
      { label: "AMM impact study", url: "https://example.com/source", publisher: "Research", year: 2021 }
    ]
  },
  {
    slug: "yfi-fair-launch",
    title: "YFI Fair Launch",
    type: "milestone",
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
      { label: "Launch post", url: "https://example.com/source", publisher: "Yearn", year: 2020 },
      { label: "Fair launch analysis", url: "https://example.com/source", publisher: "Research", year: 2020 }
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
      { label: "Peg breakdown", url: "https://example.com/source", publisher: "Onchain Analytics", year: 2022 },
      { label: "Regulatory response", url: "https://example.com/source", publisher: "Global Times", year: 2022 }
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
      { label: "Withdrawal freeze notice", url: "https://example.com/source", publisher: "Celsius", year: 2022 },
      { label: "Chapter 11 filing", url: "https://example.com/source", publisher: "Court Docs", year: 2022 }
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
      { label: "Liquidation filing", url: "https://example.com/source", publisher: "Court Docs", year: 2022 },
      { label: "Margin call reports", url: "https://example.com/source", publisher: "Industry News", year: 2022 }
    ]
  },
  {
    slug: "alameda-balance-sheet-leak",
    title: "Alameda Balance Sheet Leak",
    type: "milestone",
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
      { label: "Leak coverage", url: "https://example.com/source", publisher: "Crypto Media", year: 2022 },
      { label: "Market reaction", url: "https://example.com/source", publisher: "Market Desk", year: 2022 }
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
      { label: "Bankruptcy filing", url: "https://example.com/source", publisher: "Court Docs", year: 2022 },
      { label: "Investigative timeline", url: "https://example.com/source", publisher: "Onchain News", year: 2022 }
    ]
  },
  {
    slug: "ronin-bridge-hack",
    title: "Axie Infinity Ronin Bridge Hack",
    type: "milestone",
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
      { label: "Exploit post-mortem", url: "https://example.com/source", publisher: "Sky Mavis", year: 2022 },
      { label: "US Treasury attribution", url: "https://example.com/source", publisher: "US Treasury", year: 2022 }
    ]
  },
  {
    slug: "opensea-wyvern-exploit",
    title: "OpenSea Wyvern Exploit",
    type: "milestone",
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
      { label: "Incident recap", url: "https://example.com/source", publisher: "OpenSea", year: 2022 },
      { label: "Security analysis", url: "https://example.com/source", publisher: "Security Lab", year: 2022 }
    ]
  },
  {
    slug: "ethereum-merge",
    title: "Ethereum Merge",
    type: "milestone",
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
      { label: "Merge announcement", url: "https://example.com/source", publisher: "Ethereum Foundation", year: 2022 },
      { label: "Post-merge analysis", url: "https://example.com/source", publisher: "Research Org", year: 2022 }
    ]
  },
  {
    slug: "coinbase-ipo",
    title: "Coinbase NASDAQ Listing",
    type: "milestone",
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
      { label: "Listing day coverage", url: "https://example.com/source", publisher: "WSJ", year: 2021 },
      { label: "S-1 highlights", url: "https://example.com/source", publisher: "SEC", year: 2021 }
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
      { label: "Auction recap", url: "https://example.com/source", publisher: "Christie's", year: 2021 },
      { label: "Market impact", url: "https://example.com/source", publisher: "Art News", year: 2021 }
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
      { label: "Price surge recap", url: "https://example.com/source", publisher: "MarketWatch", year: 2021 },
      { label: "Community history", url: "https://example.com/source", publisher: "Forum Archives", year: 2021 }
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
      { label: "Listing roundup", url: "https://example.com/source", publisher: "Exchange News", year: 2021 },
      { label: "Ecosystem timeline", url: "https://example.com/source", publisher: "DeFi Journal", year: 2021 }
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
      { label: "Post-mortem analysis", url: "https://example.com/source", publisher: "Chainwatch", year: 2021 },
      { label: "Exchange halt notice", url: "https://example.com/source", publisher: "Major CEX", year: 2021 }
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
      { label: "Volume breakout", url: "https://example.com/source", publisher: "Dex Screener", year: 2023 },
      { label: "Listing timeline", url: "https://example.com/source", publisher: "CEX Radar", year: 2023 }
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
      { label: "Airdrop breakdown", url: "https://example.com/source", publisher: "Solana News", year: 2023 },
      { label: "Ecosystem integrations", url: "https://example.com/source", publisher: "Dapp Tracker", year: 2024 }
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
      { label: "Platform stats", url: "https://example.com/source", publisher: "Analytics", year: 2024 },
      { label: "Community recap", url: "https://example.com/source", publisher: "Forum", year: 2024 }
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
      { label: "SEC approval", url: "https://example.com/source", publisher: "SEC", year: 2024 },
      { label: "Inflows recap", url: "https://example.com/source", publisher: "Bloomberg", year: 2024 }
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
      { label: "Exploit coverage", url: "https://example.com/source", publisher: "DeFi Watch", year: 2023 },
      { label: "Class action filing", url: "https://example.com/source", publisher: "Court Docs", year: 2022 }
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
      { label: "Mailing list post", url: "https://example.com/source", publisher: "Cryptography ML", year: 2008 }
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
      { label: "Presale announcement", url: "https://example.com/source", publisher: "Ethereum Foundation", year: 2014 },
      { label: "ICO recap", url: "https://example.com/source", publisher: "Research Desk", year: 2016 }
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
      { label: "Network stats", url: "https://example.com/source", publisher: "Etherscan", year: 2017 },
      { label: "Press coverage", url: "https://example.com/source", publisher: "TechCrunch", year: 2017 }
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
      { label: "Launch post", url: "https://example.com/source", publisher: "Compound Labs", year: 2020 },
      { label: "DeFi recap", url: "https://example.com/source", publisher: "Analytics", year: 2020 }
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
      { label: "Marketplace stats", url: "https://example.com/source", publisher: "DappRadar", year: 2021 },
      { label: "Ecosystem recap", url: "https://example.com/source", publisher: "Community Blog", year: 2022 }
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
      { label: "Launch post", url: "https://example.com/source", publisher: "Base", year: 2023 },
      { label: "Usage stats", url: "https://example.com/source", publisher: "L2Beat", year: 2023 }
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
      { label: "Ordinals docs", url: "https://example.com/source", publisher: "Ordinals", year: 2023 },
      { label: "Fee market analysis", url: "https://example.com/source", publisher: "Research Desk", year: 2023 }
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
      { label: "Protocol dashboard", url: "https://example.com/source", publisher: "Dune", year: 2023 },
      { label: "Coverage", url: "https://example.com/source", publisher: "Decrypt", year: 2023 }
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
      { label: "Verdict coverage", url: "https://example.com/source", publisher: "Court Reporter", year: 2023 },
      { label: "Regulatory recap", url: "https://example.com/source", publisher: "Financial Press", year: 2023 }
    ]
  }
];

export const getEventBySlug = (slug: string) =>
  events.find((event) => event.slug === slug);
