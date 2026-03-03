export type EventType =
  | "rugpull"
  | "runner"
  | "milestone"
  | "hack"
  | "collapse"
  | "seizure";

export type Source = {
  label: string;
  url: string;
  publisher: string;
  year: number;
  kind?: "primary" | "secondary" | "community" | "pending";
  dateAccessed?: string;
  archivedUrl?: string;
  excerpt?: string;
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
    "slug": "silk-road-closure",
    "title": "Silk Road Marketplace Closure",
    "type": "seizure",
    "chain": "Bitcoin",
    "year": 2013,
    "date": "2013-10-02",
    "era": "genesis",
    "status": "law enforcement",
    "summary": "Legendary darknet market seized by authorities, cementing Bitcoin's early reputation and triggering debates on privacy.",
    "peakMetric": "100k+ listings",
    "outcome": "Operator arrested; BTC auctioned",
    "tags": [
      "policy",
      "darknet"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Silk Road Marketplace Closure (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Silk_Road_(marketplace)",
        "publisher": "Wikipedia",
        "year": 2013
      },
      {
        "label": "Ross Ulbricht article",
        "url": "https://en.wikipedia.org/wiki/Ross_Ulbricht",
        "publisher": "Wikipedia",
        "year": 2013
      }
    ]
  },
  {
    "slug": "mt-gox-bankruptcy",
    "title": "Mt. Gox Collapse",
    "type": "collapse",
    "chain": "Bitcoin",
    "year": 2014,
    "date": "2014-02-28",
    "era": "genesis",
    "hallOfFame": true,
    "status": "exchange hack",
    "summary": "Once the largest Bitcoin exchange, Mt. Gox collapsed after losing ~850k BTC, shaping early exchange security norms.",
    "peakMetric": "70% BTC volume share",
    "outcome": "Long rehabilitation process",
    "tags": [
      "custody",
      "exchange"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Mt. Gox Collapse (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Mt._Gox",
        "publisher": "Wikipedia",
        "year": 2014,
        "kind": "secondary"
      },
      {
        "label": "Mt. Gox Files for Bankruptcy Protection in Japan",
        "url": "https://www.reuters.com/article/us-bitcoin-mtgox-idUSBREA1R03H20140228/",
        "publisher": "Reuters",
        "year": 2014,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "dao-hack",
    "title": "The DAO Hack",
    "type": "hack",
    "chain": "Ethereum",
    "year": 2016,
    "date": "2016-06-17",
    "era": "ico-boom",
    "status": "hard fork decision",
    "summary": "Smart contract exploit drained a major DAO, leading to Ethereum's contentious hard fork and the birth of Ethereum Classic.",
    "peakMetric": "$150M ETH at risk",
    "outcome": "Ethereum/ETC split",
    "tags": [
      "governance",
      "security"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Ethereum Foundation hard fork announcement",
        "url": "https://blog.ethereum.org/2016/07/20/hard-fork-completed",
        "publisher": "Ethereum Foundation",
        "year": 2016
      },
      {
        "label": "The DAO Hack (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/The_DAO",
        "publisher": "Wikipedia",
        "year": 2016
      }
    ]
  },
  {
    "slug": "binance-launch",
    "title": "Binance Exchange Launch",
    "type": "milestone",
    "chain": "Multi-chain",
    "year": 2017,
    "date": "2017-07-14",
    "era": "ico-boom",
    "status": "exchange growth",
    "summary": "CZ launches Binance, pioneering fast listings and BNB utility within a rapidly growing exchange.",
    "peakMetric": "Top global spot volume",
    "outcome": "Exchange dominance",
    "tags": [
      "exchange",
      "cefi"
    ],
    "chartUrl": "https://tradingview.com/symbols/BNBUSD/",
    "sources": [
      {
        "label": "Binance Exchange Launch (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Binance",
        "publisher": "Wikipedia",
        "year": 2017
      },
      {
        "label": "BNB whitepaper utility section",
        "url": "https://www.binance.com/resources/ico/binance_ico_whitepaper_en.pdf",
        "publisher": "Binance",
        "year": 2017
      }
    ]
  },
  {
    "slug": "bitconnect-collapse",
    "title": "Bitconnect Collapse",
    "type": "collapse",
    "chain": "Multi-chain",
    "year": 2018,
    "date": "2018-01-17",
    "era": "ico-boom",
    "hallOfFame": true,
    "status": "pyramid unwind",
    "summary": "High-yield lending platform imploded after regulators issued warnings, leading to a 90%+ price crash.",
    "peakMetric": "Top 20 market cap",
    "outcome": "Founders charged; token delisted",
    "tags": [
      "lending",
      "ico",
      "regulation"
    ],
    "chartUrl": "https://coinmarketcap.com/currencies/bitconnect/",
    "sources": [
      {
        "label": "Texas Securities Board cease and desist",
        "url": "https://www.ssb.texas.gov/news-publications/texas-securities-commissioner-enters-emergency-cease-and-desist-order-bitconnect",
        "publisher": "Texas SSB",
        "year": 2018,
        "kind": "primary"
      },
      {
        "label": "Bitconnect Collapse (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Bitconnect",
        "publisher": "Wikipedia",
        "year": 2018,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "bitcoin-run-2017",
    "title": "Bitcoin 2017 Bull Run",
    "type": "runner",
    "chain": "Bitcoin",
    "year": 2017,
    "date": "2017-12-17",
    "era": "ico-boom",
    "hallOfFame": true,
    "status": "macro adoption",
    "summary": "Bitcoin reached ~$20k amid ICO mania, drawing global retail attention.",
    "peakMetric": "$20k ATH",
    "outcome": "Set benchmark for later cycles",
    "tags": [
      "macro",
      "runner"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "From $900 to $20,000: Bitcoin's Historic 2017 Price Run Revisited",
        "url": "https://www.coindesk.com/markets/2017/12/29/from-900-to-20000-bitcoins-historic-2017-price-run-revisited/",
        "publisher": "CoinDesk",
        "year": 2017,
        "kind": "secondary"
      },
      {
        "label": "Bitcoin 2017 Bull Run (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/History_of_bitcoin",
        "publisher": "Wikipedia",
        "year": 2017,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "coinbase-onboarding-2017",
    "title": "Coinbase App Onboarding Boom",
    "type": "milestone",
    "chain": "Multi-chain",
    "year": 2017,
    "date": "2017-12-01",
    "era": "ico-boom",
    "status": "retail onboarding",
    "summary": "Coinbase hit the top of app stores during the 2017 rush, becoming the default retail gateway.",
    "peakMetric": "#1 App Store finance app",
    "outcome": "Mainstream visibility",
    "tags": [
      "exchange",
      "onboarding",
      "retail"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Coinbase hits top spot on Apple's US App Store",
        "url": "https://techcrunch.com/2017/12/07/coinbase-hits-top-spot-on-apples-us-app-store",
        "publisher": "TechCrunch",
        "year": 2017,
        "kind": "secondary"
      },
      {
        "label": "Coinbase App Onboarding Boom (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Coinbase",
        "publisher": "Wikipedia",
        "year": 2017
      }
    ]
  },
  {
    "slug": "covid-black-swan",
    "title": "COVID-19 Black Swan",
    "type": "milestone",
    "chain": "Multi-chain",
    "year": 2020,
    "date": "2020-03-12",
    "era": "defi-summer",
    "status": "macro shock",
    "summary": "Global markets crashed; BTC briefly fell below $4k before recovering, catalyzing new entrants.",
    "peakMetric": "-50% intraday BTC drawdown",
    "outcome": "Liquidity shock then recovery",
    "tags": [
      "macro",
      "black-swan"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Down 26%: Bitcoin Sees Worst Sell-Off in 7 Years as Coronavirus Spurs Flight to Safety",
        "url": "https://www.coindesk.com/markets/2020/03/12/down-26-bitcoin-sees-worst-sell-off-in-7-years-as-coronavirus-spurs-flight-to-safety",
        "publisher": "CoinDesk",
        "year": 2020,
        "kind": "secondary"
      },
      {
        "label": "COVID-19 Black Swan (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/2020_stock_market_crash",
        "publisher": "Wikipedia",
        "year": 2020
      }
    ]
  },
  {
    "slug": "uniswap-v2-launch",
    "title": "Uniswap V2 Launch",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2020,
    "date": "2020-05-18",
    "era": "defi-summer",
    "status": "dex upgrade",
    "summary": "Uniswap V2 introduced direct ERC-20 pairs and oracles, accelerating AMM adoption.",
    "peakMetric": "Rapid TVL climb",
    "outcome": "Set AMM standard",
    "tags": [
      "dex",
      "amm",
      "defi"
    ],
    "chartUrl": "https://tradingview.com/symbols/UNIUSD/",
    "sources": [
      {
        "label": "Launch post",
        "url": "https://uniswap.org/blog/uniswap-v2",
        "publisher": "Uniswap",
        "year": 2020
      },
      {
        "label": "AMM impact study",
        "url": "https://www.gemini.com/cryptopedia/amm-uniswap-v2",
        "publisher": "Gemini Cryptopedia",
        "year": 2021
      }
    ]
  },
  {
    "slug": "yfi-fair-launch",
    "title": "YFI Fair Launch",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2020,
    "date": "2020-07-17",
    "era": "defi-summer",
    "status": "fair launch",
    "summary": "Yearn introduced a zero-premine, governance-first token that became a DeFi cultural pillar.",
    "peakMetric": "$40k token peak",
    "outcome": "Set fair launch precedent",
    "tags": [
      "defi",
      "governance",
      "fair-launch"
    ],
    "chartUrl": "https://tradingview.com/symbols/YFIUSD/",
    "sources": [
      {
        "label": "Yearn Docs: YFI distribution",
        "url": "https://docs.yearn.fi/contributing/governance/yfi",
        "publisher": "Yearn Docs",
        "year": 2020
      },
      {
        "label": "Yearn.finance (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Yearn.finance",
        "publisher": "Wikipedia",
        "year": 2020
      }
    ]
  },
  {
    "slug": "pancakeswap-launch",
    "title": "PancakeSwap Launch",
    "type": "milestone",
    "chain": "BNB Chain (BSC)",
    "year": 2020,
    "date": "2020-09-20",
    "era": "defi-summer",
    "status": "dex launch",
    "summary": "PancakeSwap launched on Binance Smart Chain as a low-fee Uniswap alternative, onboarding millions of retail users priced out of Ethereum gas fees and briefly surpassing Uniswap in TVL.",
    "peakMetric": "$7.87B TVL peak",
    "outcome": "BSC's dominant DEX; emerging-market DeFi gateway",
    "tags": [
      "defi",
      "dex",
      "amm",
      "bsc"
    ],
    "chartUrl": "https://tradingview.com/symbols/CAKEUSD/",
    "sources": [
      {
        "label": "PancakeSwap widens BSC lead over Ethereum transactions",
        "url": "https://www.coindesk.com/markets/2021/04/22/pancakeswap-widens-binance-smart-chains-lead-over-ethereum-on-transactions/",
        "publisher": "CoinDesk",
        "year": 2021,
        "kind": "secondary"
      },
      {
        "label": "PancakeSwap overtakes Uniswap in TVL",
        "url": "https://thedefiant.io/news/defi/pancakeswaps-total-value-locked-overtakes-uniswaps",
        "publisher": "The Defiant",
        "year": 2021,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "terra-luna-collapse",
    "title": "Terra/Luna Collapse",
    "type": "collapse",
    "chain": "Terra",
    "year": 2022,
    "date": "2022-05-09",
    "era": "defi-summer",
    "hallOfFame": true,
    "status": "stablecoin failure",
    "summary": "Algorithmic stablecoin UST lost its peg, causing a death spiral that erased tens of billions in value.",
    "peakMetric": "$60B ecosystem TVL",
    "outcome": "Chain forked; legal probes",
    "tags": [
      "stablecoin",
      "defi",
      "systemic-risk"
    ],
    "chartUrl": "https://tradingview.com/symbols/LUNAUSD/",
    "sources": [
      {
        "label": "The Fall of Terra: A Timeline of the Meteoric Rise and Crash of UST and LUNA",
        "url": "https://www.coindesk.com/learn/the-fall-of-terra-a-timeline-of-the-meteoric-rise-and-crash-of-ust-and-luna",
        "publisher": "CoinDesk",
        "year": 2022,
        "kind": "secondary"
      },
      {
        "label": "Terra/Luna Rugpull (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Terra_(blockchain)",
        "publisher": "Wikipedia",
        "year": 2022,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "celsius-bankruptcy",
    "title": "Celsius Bankruptcy",
    "type": "collapse",
    "chain": "CeFi",
    "year": 2022,
    "date": "2022-07-13",
    "era": "defi-summer",
    "status": "insolvency",
    "summary": "Lending platform froze withdrawals citing extreme market conditions before filing for Chapter 11.",
    "peakMetric": "$20B peak assets",
    "outcome": "Bankruptcy proceedings",
    "tags": [
      "cefi",
      "lending",
      "bankruptcy"
    ],
    "chartUrl": "https://tradingview.com/symbols/CELUSD/",
    "sources": [
      {
        "label": "Celsius Network Files for Chapter 11 Bankruptcy",
        "url": "https://www.coindesk.com/business/2022/07/14/celsius-files-for-chapter-11-bankrupcty",
        "publisher": "CoinDesk",
        "year": 2022,
        "kind": "secondary"
      },
      {
        "label": "Celsius Bankruptcy (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Celsius_Network",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "three-arrows-capital",
    "title": "Three Arrows Capital Collapse",
    "type": "collapse",
    "chain": "Multi-chain",
    "year": 2022,
    "date": "2022-06-27",
    "era": "defi-summer",
    "status": "fund insolvency",
    "summary": "Hedge fund failed to meet margin calls after leveraged bets, triggering forced liquidations across lenders.",
    "peakMetric": "$10B AUM peak",
    "outcome": "Liquidation ordered",
    "tags": [
      "fund",
      "leverage",
      "bankruptcy"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Three Arrows Capital Files for Bankruptcy in New York",
        "url": "https://www.coindesk.com/business/2022/07/01/three-arrows-capital-files-for-bankruptcy-in-new-york-tied-to-british-virgin-islands-proceeding",
        "publisher": "CoinDesk",
        "year": 2022,
        "kind": "secondary"
      },
      {
        "label": "Three Arrows Capital Collapse (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Three_Arrows_Capital",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "alameda-balance-sheet-leak",
    "title": "Alameda Balance Sheet Leak",
    "type": "milestone",
    "chain": "CeFi",
    "year": 2022,
    "date": "2022-11-02",
    "era": "defi-summer",
    "status": "contagion catalyst",
    "summary": "Leaked financials showed heavy FTT collateral reliance, triggering market stress that preceded FTX collapse.",
    "peakMetric": "Billions in illiquid FTT",
    "outcome": "Liquidity crisis; run on FTX",
    "tags": [
      "cefi",
      "contagion"
    ],
    "chartUrl": "https://tradingview.com/symbols/FTTUSD/",
    "sources": [
      {
        "label": "Divisions in Sam Bankman-Fried's Crypto Empire Blur on His Trading Titan Alameda's Balance Sheet",
        "url": "https://www.coindesk.com/business/2022/11/02/divisions-in-sam-bankman-frieds-crypto-empire-blur-on-his-trading-titan-alamedas-balance-sheet",
        "publisher": "CoinDesk",
        "year": 2022,
        "kind": "primary"
      },
      {
        "label": "Alameda Balance Sheet Leak (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/FTX_(company)",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "ftx-collapse",
    "title": "FTX Exchange Collapse",
    "type": "collapse",
    "chain": "CeFi",
    "year": 2022,
    "date": "2022-11-11",
    "era": "defi-summer",
    "hallOfFame": true,
    "status": "custodial failure",
    "summary": "One of the largest centralized exchanges filed for bankruptcy after liquidity crunch and alleged misuse of funds.",
    "peakMetric": "$32B private valuation",
    "outcome": "Bankruptcy; asset clawbacks underway",
    "tags": [
      "cefi",
      "custody",
      "bankruptcy"
    ],
    "chartUrl": "https://tradingview.com/symbols/FTTUSD/",
    "sources": [
      {
        "label": "Post-mortem timeline",
        "url": "https://www.coindesk.com/learn/ftx-collapse-timeline-what-happened-to-sam-bankman-frieds-crypto-empire/",
        "publisher": "CoinDesk",
        "year": 2022,
        "kind": "secondary"
      },
      {
        "label": "FTX Exchange Collapse (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/FTX_(company)",
        "publisher": "Wikipedia",
        "year": 2022,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "ronin-bridge-hack",
    "title": "Axie Infinity Ronin Bridge Hack",
    "type": "hack",
    "chain": "Ethereum/Sidechain",
    "year": 2022,
    "date": "2022-03-23",
    "era": "defi-summer",
    "status": "bridge exploit",
    "summary": "Attackers stole over $600M in ETH/USDC from the Ronin bridge via compromised validator keys.",
    "peakMetric": "$600M loss",
    "outcome": "Bridge rebuilt; partial restitution",
    "tags": [
      "bridge",
      "security",
      "gaming"
    ],
    "chartUrl": "https://tradingview.com/symbols/AXSUSD/",
    "sources": [
      {
        "label": "US Treasury attribution",
        "url": "https://home.treasury.gov/news/press-releases/jy0701",
        "publisher": "US Treasury",
        "year": 2022
      },
      {
        "label": "Axie Infinity Ronin Bridge Hack (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Ronin_Network",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "opensea-wyvern-exploit",
    "title": "OpenSea Wyvern Exploit",
    "type": "hack",
    "chain": "Ethereum",
    "year": 2022,
    "date": "2022-02-20",
    "era": "nft-onboarding",
    "status": "marketplace exploit",
    "summary": "Attackers used stale listings to purchase NFTs below market, exposing marketplace approval risks.",
    "peakMetric": "$1.7M estimated losses",
    "outcome": "Listings migrated; user restitution",
    "tags": [
      "nft",
      "marketplace",
      "security"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "OpenSea Wyvern Exploit (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/OpenSea",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "ethereum-merge",
    "title": "Ethereum Merge",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2022,
    "date": "2022-09-15",
    "era": "defi-summer",
    "status": "protocol upgrade",
    "summary": "Ethereum transitioned from Proof of Work to Proof of Stake, reducing energy consumption and changing issuance.",
    "peakMetric": "Energy use down ~99%",
    "outcome": "PoS live; PoW forked",
    "tags": [
      "protocol",
      "upgrade"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Ethereum Merge announcement",
        "url": "https://blog.ethereum.org/2022/08/24/mainnet-merge-announcement",
        "publisher": "Ethereum Foundation",
        "year": 2022
      },
      {
        "label": "Ethereum Merge (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Ethereum",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "coinbase-ipo",
    "title": "Coinbase NASDAQ Listing",
    "type": "milestone",
    "chain": "Multi-chain",
    "year": 2021,
    "date": "2021-04-14",
    "era": "nft-onboarding",
    "status": "public listing",
    "summary": "The largest US exchange debuted via direct listing, signaling institutional recognition.",
    "peakMetric": "$100B intraday valuation",
    "outcome": "Cemented exchange legitimacy",
    "tags": [
      "exchange",
      "ipo",
      "regulation"
    ],
    "chartUrl": "https://tradingview.com/symbols/COIN/",
    "sources": [
      {
        "label": "Coinbase gets all-clear from SEC, setting stage for landmark crypto listing",
        "url": "https://www.reuters.com/technology/coinbase-gets-green-light-sec-direct-listing-nasdaq-2021-04-01/",
        "publisher": "Reuters",
        "year": 2021,
        "kind": "secondary"
      },
      {
        "label": "Coinbase NASDAQ Listing (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Coinbase",
        "publisher": "Wikipedia",
        "year": 2021
      }
    ]
  },
  {
    "slug": "beeple-sale",
    "title": "Beeple $69M NFT Sale",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2021,
    "date": "2021-03-11",
    "era": "nft-onboarding",
    "status": "auction record",
    "summary": "Christie's sold Beeple's 'Everydays' for $69M, igniting mainstream NFT awareness.",
    "peakMetric": "$69M hammer price",
    "outcome": "Mainstream NFT attention",
    "tags": [
      "nft",
      "art",
      "auction"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Christie's sale result",
        "url": "https://www.christies.com/features/Everydays-The-First-5000-Days-11510-7.aspx",
        "publisher": "Christie's",
        "year": 2021
      },
      {
        "label": "Market reaction",
        "url": "https://www.bbc.com/news/technology-56371912",
        "publisher": "BBC",
        "year": 2021
      }
    ]
  },
  {
    "slug": "dogecoin-run",
    "title": "Dogecoin Meme Run",
    "type": "runner",
    "chain": "Multi-chain",
    "year": 2021,
    "date": "2021-05-08",
    "era": "nft-onboarding",
    "hallOfFame": true,
    "status": "community-driven",
    "summary": "Originally a joke, Dogecoin rallied on viral momentum, tipping culture, and social amplification.",
    "peakMetric": "$0.73 ATH",
    "outcome": "Sustained memecoin presence",
    "tags": [
      "meme",
      "community"
    ],
    "chartUrl": "https://tradingview.com/symbols/DOGEUSD/",
    "sources": [
      {
        "label": "Dogecoin surges to record high, up almost 300% in a week",
        "url": "https://www.reuters.com/technology/dogecoin-surges-record-high-up-almost-300-week-2021-04-16/",
        "publisher": "Reuters",
        "year": 2021,
        "kind": "secondary"
      },
      {
        "label": "Dogecoin Meme Run (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Dogecoin",
        "publisher": "Wikipedia",
        "year": 2021,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "shiba-inu-run",
    "title": "Shiba Inu Ascent",
    "type": "runner",
    "chain": "Ethereum",
    "year": 2021,
    "date": "2021-10-27",
    "era": "nft-onboarding",
    "hallOfFame": true,
    "status": "community + defi",
    "summary": "SHIB rallied through community marketing, exchange listings, and the launch of ShibaSwap ecosystem.",
    "peakMetric": "$40B peak FDV",
    "outcome": "Ecosystem expansion",
    "tags": [
      "meme",
      "defi",
      "community"
    ],
    "chartUrl": "https://tradingview.com/symbols/SHIBUSD/",
    "sources": [
      {
        "label": "Meme Tokens Led 'Uptober' as SHIB Mooned 765%",
        "url": "https://www.coindesk.com/markets/2021/11/01/meme-tokens-led-uptober-as-shib-mooned-765",
        "publisher": "CoinDesk",
        "year": 2021,
        "kind": "secondary"
      },
      {
        "label": "Shiba Inu Ascent (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Shiba_Inu_(cryptocurrency)",
        "publisher": "Wikipedia",
        "year": 2021,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "anubisdao-rugpull",
    "title": "AnubisDAO Rugpull",
    "type": "rugpull",
    "chain": "Ethereum",
    "year": 2021,
    "date": "2021-10-28",
    "era": "nft-onboarding",
    "hallOfFame": true,
    "status": "liquidity drain",
    "summary": "AnubisDAO raised tens of millions in hours before the treasury disappeared, highlighting the risks of unaudited, anonymous launches.",
    "peakMetric": "$60M+ TVL vanished",
    "outcome": "Funds missing; project abandoned",
    "tags": [
      "dao",
      "defi",
      "rugpull"
    ],
    "sources": [
      {
        "label": "AnubisDAO Investors Lose $60 Million in Alleged Rug Pull",
        "url": "https://decrypt.co/84924/anubisdao-investors-lose-60-million-in-alleged-rug-pull",
        "publisher": "Decrypt",
        "year": 2021,
        "kind": "secondary"
      },
      {
        "label": "AnubisDAO Rugpull (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Decentralized_autonomous_organization",
        "publisher": "Wikipedia",
        "year": 2021,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "thodex-exit-scam",
    "title": "Thodex Exchange Exit Scam",
    "type": "rugpull",
    "chain": "CeFi",
    "year": 2021,
    "date": "2021-04-21",
    "era": "nft-onboarding",
    "hallOfFame": true,
    "status": "exchange exit",
    "summary": "Turkey-based exchange Thodex halted withdrawals and its CEO fled, leaving users locked out and prompting a national investigation.",
    "peakMetric": "Withdrawals frozen",
    "outcome": "CEO arrested; legal proceedings",
    "tags": [
      "exchange",
      "cefi",
      "rugpull",
      "exit-scam"
    ],
    "chartUrl": "https://coinmarketcap.com/exchanges/thodex/",
    "sources": [
      {
        "label": "Police search cryptocurrency trading firm after Turks say they were scammed",
        "url": "https://www.reuters.com/world/middle-east/turkish-crypto-traders-file-complaints-after-access-accounts-frozen-lawyer-2021-04-22/",
        "publisher": "Reuters",
        "year": 2021,
        "kind": "secondary"
      },
      {
        "label": "Thodex Exchange Exit Scam (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Thodex",
        "publisher": "Wikipedia",
        "year": 2021,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "squid-game-token",
    "title": "Squid Game Token Rugpull",
    "type": "rugpull",
    "chain": "BSC",
    "year": 2021,
    "date": "2021-11-01",
    "era": "nft-onboarding",
    "hallOfFame": true,
    "status": "exit liquidity spike",
    "summary": "Token inspired by the TV show rocketed then crashed after developers drained liquidity and vanished.",
    "peakMetric": "23,000% run-up pre-rug",
    "outcome": "Liquidity removed; trading halted",
    "tags": [
      "meme",
      "rugpull"
    ],
    "chartUrl": "https://coinmarketcap.com/currencies/squid-game/",
    "sources": [
      {
        "label": "Post-mortem analysis",
        "url": "https://www.bbc.com/news/business-59129466",
        "publisher": "BBC",
        "year": 2021,
        "kind": "secondary"
      },
      {
        "label": "Squid Game Token Rugpull (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Squid_Game_token",
        "publisher": "Wikipedia",
        "year": 2021,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "pepe-memecoin",
    "title": "PEPE Meme Rally",
    "type": "runner",
    "chain": "Ethereum",
    "year": 2023,
    "date": "2023-04-18",
    "era": "pump-fun",
    "hallOfFame": true,
    "status": "viral",
    "summary": "PEPE captured the 2023 meme cycle with rapid exchange listings and high on-chain volume.",
    "peakMetric": "$1.6B market cap",
    "outcome": "Continues trading",
    "tags": [
      "meme",
      "defi"
    ],
    "chartUrl": "https://coinmarketcap.com/currencies/pepe/",
    "sources": [
      {
        "label": "PEPE Token Soars to $500M Market Cap",
        "url": "https://www.coindesk.com/business/2023/05/02/pepe-token-soars-to-500m-market-cap-as-memecoin-fever-grips-crypto-traders",
        "publisher": "CoinDesk",
        "year": 2023,
        "kind": "secondary"
      },
      {
        "label": "PEPE Meme Rally (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Pepe_(cryptocurrency)",
        "publisher": "Wikipedia",
        "year": 2023,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "bonk-solana",
    "title": "BONK on Solana",
    "type": "runner",
    "chain": "Solana",
    "year": 2023,
    "date": "2023-12-08",
    "era": "pump-fun",
    "hallOfFame": true,
    "status": "ecosystem revival",
    "summary": "Dog-themed token airdropped to builders, energizing Solana sentiment after a deep drawdown.",
    "peakMetric": "3000%+ from lows",
    "outcome": "Integrated across Solana dapps",
    "tags": [
      "meme",
      "airdrop"
    ],
    "chartUrl": "https://coinmarketcap.com/currencies/bonk/",
    "sources": [
      {
        "label": "Sales of Solana Phone Surge as Traders Chase BONK Arbitrage",
        "url": "https://www.coindesk.com/markets/2023/12/14/sales-of-solana-phone-surge-as-traders-chase-bonk-arbitrage",
        "publisher": "CoinDesk",
        "year": 2023,
        "kind": "secondary"
      },
      {
        "label": "BONK on Solana (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Bonk_(cryptocurrency)",
        "publisher": "Wikipedia",
        "year": 2023,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "solana-revival-run",
    "title": "Solana Post-FTX Revival Run",
    "type": "runner",
    "chain": "Solana",
    "year": 2024,
    "date": "2024-03-18",
    "era": "pump-fun",
    "hallOfFame": true,
    "status": "ecosystem rebound",
    "summary": "SOL rebounded from post-FTX lows as developer activity, DeFi liquidity, and memecoin momentum reignited Solana demand.",
    "peakMetric": "$8 to $300",
    "outcome": "Network sentiment reversal",
    "tags": [
      "runner",
      "rebound",
      "defi"
    ],
    "chartUrl": "https://tradingview.com/symbols/SOLUSD/",
    "sources": [
      {
        "label": "Solana's SOL Surges to Record High Above $260",
        "url": "https://www.coindesk.com/markets/2024/11/22/solanas-sol-surges-to-record-high-above-260",
        "publisher": "CoinDesk",
        "year": 2024,
        "kind": "secondary"
      },
      {
        "label": "Solana Post-FTX Revival Run (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Solana_(blockchain_platform)",
        "publisher": "Wikipedia",
        "year": 2024,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "pump-fun-surge",
    "title": "Pump.fun Era Emerges",
    "type": "milestone",
    "chain": "Solana",
    "year": 2024,
    "date": "2024-03-15",
    "era": "pump-fun",
    "status": "launchpad",
    "summary": "Ultra-fast memecoin launch tooling popularized instant liquidity and viral spins.",
    "peakMetric": "Thousands of tokens/day",
    "outcome": "New launch pattern",
    "tags": [
      "launchpad",
      "meme"
    ],
    "chartUrl": "https://dexscreener.com/solana",
    "sources": [
      {
        "label": "Pump.Fun: Solana's Memecoin Juggernaut",
        "url": "https://www.coindesk.com/business/2024/12/10/pump-fun-solana-s-memecoin-juggernaut",
        "publisher": "CoinDesk",
        "year": 2024,
        "kind": "secondary"
      },
      {
        "label": "Pump.fun Era Emerges (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Pump.fun",
        "publisher": "Wikipedia",
        "year": 2024
      }
    ]
  },
  {
    "slug": "btc-etf-approval",
    "title": "Bitcoin Spot ETF Approvals",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2024,
    "date": "2024-01-10",
    "era": "pump-fun",
    "status": "regulatory",
    "summary": "US regulators approved multiple spot BTC ETFs, opening institutional rails for direct exposure.",
    "peakMetric": "Record first-week inflows",
    "outcome": "Expanded institutional access",
    "tags": [
      "regulation",
      "etf"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "US SEC approves bitcoin ETFs in watershed for crypto market",
        "url": "https://www.reuters.com/technology/bitcoin-etf-hopefuls-still-expect-sec-approval-despite-social-media-hack-2024-01-10/",
        "publisher": "Reuters",
        "year": 2024,
        "kind": "secondary"
      },
      {
        "label": "Bitcoin Spot ETF Approvals (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Cryptocurrency_exchange-traded_fund",
        "publisher": "Wikipedia",
        "year": 2024
      }
    ]
  },
  {
    "slug": "safemoon-drain",
    "title": "SafeMoon Liquidity Drain",
    "type": "rugpull",
    "chain": "BSC",
    "year": 2021,
    "date": "2021-03-29",
    "era": "defi-summer",
    "hallOfFame": true,
    "status": "long unraveling",
    "summary": "Controversial reflections token faced exploits, treasury drains, and lawsuits over locked liquidity promises.",
    "peakMetric": "$5B+ FDV peak",
    "outcome": "Ongoing legal actions",
    "tags": [
      "defi",
      "rugpull"
    ],
    "chartUrl": "https://coinmarketcap.com/currencies/safemoon/",
    "sources": [
      {
        "label": "SafeMoon article",
        "url": "https://en.wikipedia.org/wiki/SafeMoon",
        "publisher": "Wikipedia",
        "year": 2021,
        "kind": "secondary"
      },
      {
        "label": "SEC charges SafeMoon executives",
        "url": "https://www.sec.gov/newsroom/press-releases/2023-229",
        "publisher": "U.S. SEC",
        "year": 2023,
        "kind": "primary"
      }
    ]
  },
  {
    "slug": "meerkat-finance-rugpull",
    "title": "Meerkat Finance Rugpull",
    "type": "rugpull",
    "chain": "BSC",
    "year": 2021,
    "date": "2021-03-05",
    "era": "defi-summer",
    "hallOfFame": true,
    "status": "vault drained",
    "summary": "Meerkat Finance's vault funds vanished shortly after launch, sparking a scramble across BSC as liquidity providers realized the contracts had been emptied.",
    "peakMetric": "$31M TVL drained",
    "outcome": "Project claimed exploit; users left with losses",
    "tags": [
      "defi",
      "rugpull"
    ],
    "sources": [
      {
        "label": "Meerkat Finance disappears with $31M",
        "url": "https://www.coindesk.com/markets/2021/03/05/binance-smart-chain-defi-project-meerkat-finance-disappears-with-31m/",
        "publisher": "CoinDesk",
        "year": 2021,
        "kind": "secondary"
      },
      {
        "label": "Binance Smart Chain project Meerkat vanishes",
        "url": "https://www.theblock.co/post/97032/binance-smart-chain-project-meerkat-finance-disappears-with-31-million",
        "publisher": "The Block",
        "year": 2021,
        "kind": "secondary"
      }
    ]
  },
  {
    "slug": "bitcoin-whitepaper",
    "title": "Bitcoin Whitepaper Published",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2008,
    "date": "2008-10-31",
    "era": "genesis",
    "status": "protocol design",
    "summary": "Satoshi Nakamoto released the Bitcoin whitepaper, outlining peer-to-peer electronic cash and trustless consensus.",
    "outcome": "Open-source release",
    "tags": [
      "protocol",
      "whitepaper"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Bitcoin whitepaper",
        "url": "https://bitcoin.org/bitcoin.pdf",
        "publisher": "Satoshi Nakamoto",
        "year": 2008
      },
      {
        "label": "Mailing list post",
        "url": "https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html",
        "publisher": "Cryptography ML",
        "year": 2008
      }
    ]
  },
  {
    "slug": "ethereum-ico-launch",
    "title": "Ethereum ICO Launch",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2014,
    "date": "2014-07-22",
    "era": "ico-boom",
    "status": "crowdfund",
    "summary": "Ethereum raised funds via token presale, catalyzing the smart contract platform era and setting the ICO template.",
    "peakMetric": "$18M equivalent raise",
    "outcome": "Mainnet shipped 2015",
    "tags": [
      "ico",
      "smart-contract"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Launching the Ether Sale",
        "url": "https://blog.ethereum.org/2014/07/22/launching-the-ether-sale",
        "publisher": "Ethereum Foundation",
        "year": 2014,
        "kind": "primary"
      },
      {
        "label": "Ethereum ICO Launch (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Ethereum",
        "publisher": "Wikipedia",
        "year": 2014
      }
    ]
  },
  {
    "slug": "cryptokitties-congestion",
    "title": "CryptoKitties Chain Congestion",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2017,
    "date": "2017-12-05",
    "era": "ico-boom",
    "status": "network stress",
    "summary": "Viral NFT game CryptoKitties clogged Ethereum, highlighting fee markets and the need for scaling solutions.",
    "peakMetric": "20k+ daily tx from game",
    "outcome": "Gas spikes; scaling urgency",
    "tags": [
      "nft",
      "scaling",
      "gaming"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "CryptoKitties Chain Congestion (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/CryptoKitties",
        "publisher": "Wikipedia",
        "year": 2017
      }
    ]
  },
  {
    "slug": "compound-yield-farming",
    "title": "Compound Launches Yield Farming",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2020,
    "date": "2020-06-15",
    "era": "defi-summer",
    "status": "token incentives",
    "summary": "COMP distribution sparked the first major yield farming wave, bootstrapping on-chain liquidity and composability playbooks.",
    "peakMetric": "$600M+ TVL within weeks",
    "outcome": "DeFi Summer ignition",
    "tags": [
      "defi",
      "liquidity",
      "governance"
    ],
    "chartUrl": "https://tradingview.com/symbols/COMPUSD/",
    "sources": [
      {
        "label": "Compound governance docs",
        "url": "https://docs.compound.finance/governance/",
        "publisher": "Compound",
        "year": 2020
      },
      {
        "label": "Compound Launches Yield Farming (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Compound_(finance)",
        "publisher": "Wikipedia",
        "year": 2020
      }
    ]
  },
  {
    "slug": "axie-p2e-peak",
    "title": "Axie Infinity Play-to-Earn Peak",
    "type": "runner",
    "chain": "Ethereum/Sidechain",
    "year": 2021,
    "date": "2021-08-01",
    "era": "nft-onboarding",
    "status": "gaming adoption",
    "summary": "Axie Infinity's play-to-earn model onboarded millions, driving sidechain activity and debate on sustainable token economies.",
    "peakMetric": "$4B+ lifetime NFT volume",
    "outcome": "Model tested; growth slowed",
    "tags": [
      "gaming",
      "nft",
      "p2e"
    ],
    "chartUrl": "https://tradingview.com/symbols/AXSUSD/",
    "sources": [
      {
        "label": "Workers in the Global South are making a living playing Axie Infinity",
        "url": "https://restofworld.org/2021/axie-infinity/",
        "publisher": "Rest of World",
        "year": 2021,
        "kind": "secondary"
      },
      {
        "label": "Axie Infinity Play-to-Earn Peak (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Axie_Infinity",
        "publisher": "Wikipedia",
        "year": 2021
      }
    ]
  },
  {
    "slug": "base-mainnet-launch",
    "title": "Base Mainnet Launch",
    "type": "milestone",
    "chain": "Ethereum L2",
    "year": 2023,
    "date": "2023-08-09",
    "era": "pump-fun",
    "status": "l2 launch",
    "summary": "Coinbase launched Base on OP Stack, accelerating consumer onramps and L2 adoption with low-fee social apps.",
    "peakMetric": "1M+ daily tx bursts",
    "outcome": "New L2 liquidity venue",
    "tags": [
      "l2",
      "onboarding",
      "infrastructure"
    ],
    "chartUrl": "https://l2beat.com/scaling/projects/base",
    "sources": [
      {
        "label": "Usage stats",
        "url": "https://l2beat.com/scaling/projects/base",
        "publisher": "L2Beat",
        "year": 2023
      },
      {
        "label": "Base Mainnet Launch (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Base_(blockchain)",
        "publisher": "Wikipedia",
        "year": 2023
      }
    ]
  },
  {
    "slug": "bitcoin-ordinals-launch",
    "title": "Bitcoin Ordinals Minting Launch",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2023,
    "date": "2023-01-21",
    "era": "pump-fun",
    "status": "protocol experiment",
    "summary": "Ordinals enabled NFT-like inscriptions on Bitcoin, driving fee spikes and reigniting debates on blockspace usage.",
    "peakMetric": "200k+ inscriptions in early weeks",
    "outcome": "New Bitcoin blockspace demand",
    "tags": [
      "nft",
      "infrastructure"
    ],
    "chartUrl": "https://mempool.space",
    "sources": [
      {
        "label": "Ordinals docs",
        "url": "https://docs.ordinals.com/",
        "publisher": "Ordinals",
        "year": 2023
      },
      {
        "label": "Bitcoin Ordinals Minting Launch (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Bitcoin_Ordinals",
        "publisher": "Wikipedia",
        "year": 2023
      }
    ]
  },
  {
    "slug": "friend-tech-summer",
    "title": "Friend.tech Social Token Summer",
    "type": "runner",
    "chain": "Base",
    "year": 2023,
    "date": "2023-08-12",
    "era": "pump-fun",
    "status": "social trading",
    "summary": "Friend.tech popularized social trading keys on Base, showcasing L2 onboarding and viral fee generation.",
    "peakMetric": "$1M+ protocol fees/day",
    "outcome": "Copycats and debates on sustainability",
    "tags": [
      "socialfi",
      "l2",
      "onboarding"
    ],
    "sources": [
      {
        "label": "Friend.tech Social Token Summer (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Friend.tech",
        "publisher": "Wikipedia",
        "year": 2023
      }
    ]
  },
  {
    "slug": "sbf-trial-verdict",
    "title": "SBF Trial Verdict",
    "type": "milestone",
    "chain": "CeFi",
    "year": 2023,
    "date": "2023-11-02",
    "era": "pump-fun",
    "status": "legal outcome",
    "summary": "A federal jury convicted FTX founder Sam Bankman-Fried on fraud and conspiracy charges, closing a key chapter of CeFi contagion.",
    "outcome": "Convicted on all counts",
    "tags": [
      "legal",
      "cefi",
      "ftx"
    ],
    "chartUrl": "https://tradingview.com/symbols/FTTUSD/",
    "sources": [
      {
        "label": "SBF Trial Verdict (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Trial_of_Sam_Bankman-Fried",
        "publisher": "Wikipedia",
        "year": 2023
      }
    ]
  },
  {
    "slug": "bitfinex-hack",
    "title": "Bitfinex Hack",
    "type": "hack",
    "chain": "Bitcoin",
    "year": 2016,
    "date": "2016-08-02",
    "era": "ico-boom",
    "status": "exchange hack",
    "summary": "Hackers stole ~120k BTC from Bitfinex, prompting socialized losses and tokenized IOUs (BFX).",
    "peakMetric": "120k BTC stolen",
    "outcome": "Partial recovery; arrests in 2022",
    "tags": [
      "exchange",
      "security"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Bitfinex Hack (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Bitfinex",
        "publisher": "Wikipedia",
        "year": 2016
      },
      {
        "label": "Arrest announcement",
        "url": "https://www.justice.gov/opa/pr/two-arrested-alleged-conspiracy-launder-45-billion-stolen-cryptocurrency",
        "publisher": "DOJ",
        "year": 2022
      }
    ]
  },
  {
    "slug": "parity-multisig-freeze",
    "title": "Parity Multisig Freeze",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2017,
    "date": "2017-11-06",
    "era": "ico-boom",
    "status": "contract bug",
    "summary": "A library self-destruct call froze ~$150M in multisig wallets, highlighting upgradeability risks.",
    "peakMetric": "$150M frozen",
    "outcome": "Funds permanently locked",
    "tags": [
      "security",
      "multisig"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Parity Multisig Freeze (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Parity_Technologies",
        "publisher": "Wikipedia",
        "year": 2017
      }
    ]
  },
  {
    "slug": "yam-finance-bug",
    "title": "YAM Finance Launch Bug",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2020,
    "date": "2020-08-12",
    "era": "defi-summer",
    "status": "governance bug",
    "summary": "A governance bug in the rebasing token locked treasury funds, showcasing DeFi launch risks.",
    "peakMetric": "$600M TVL pre-bug",
    "outcome": "V2 relaunch",
    "tags": [
      "defi",
      "governance",
      "bug"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Incident analysis",
        "url": "https://cointelegraph.com/news/how-one-line-of-code-destroyed-yam-defi",
        "publisher": "Cointelegraph",
        "year": 2020
      },
      {
        "label": "YAM Finance Launch Bug (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Yam_Finance",
        "publisher": "Wikipedia",
        "year": 2020
      }
    ]
  },
  {
    "slug": "poly-network-hack",
    "title": "Poly Network Hack",
    "type": "hack",
    "chain": "Multi-chain",
    "year": 2021,
    "date": "2021-08-10",
    "era": "nft-onboarding",
    "status": "bridge exploit",
    "summary": "Cross-chain protocol hacked for $600M+, later largely returned by the attacker dubbed 'Mr. White Hat'.",
    "peakMetric": "$600M exploit",
    "outcome": "Funds returned, contracts patched",
    "tags": [
      "bridge",
      "security",
      "defi"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Poly Network Hack (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Poly_Network",
        "publisher": "Wikipedia",
        "year": 2021
      }
    ]
  },
  {
    "slug": "wormhole-hack",
    "title": "Wormhole Bridge Hack",
    "type": "hack",
    "chain": "Solana/Ethereum",
    "year": 2022,
    "date": "2022-02-02",
    "era": "defi-summer",
    "status": "bridge exploit",
    "summary": "A smart contract vulnerability allowed minting of 120k wETH; Jump Crypto backstopped losses.",
    "peakMetric": "120k wETH exploited",
    "outcome": "Jump replenished funds",
    "tags": [
      "bridge",
      "security"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Incident thread",
        "url": "https://twitter.com/wormholecrypto/status/1489038176512888834",
        "publisher": "Wormhole",
        "year": 2022
      },
      {
        "label": "Wormhole Bridge Hack (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Wormhole_(blockchain_bridge)",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "maker-black-thursday",
    "title": "MakerDAO Black Thursday",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2020,
    "date": "2020-03-12",
    "era": "defi-summer",
    "status": "liquidation failure",
    "summary": "Oracle and gas issues let bidders win vault liquidations for 0 DAI, undercollateralizing the system.",
    "peakMetric": "$5M undercollateralized",
    "outcome": "Debt auction and upgrades",
    "tags": [
      "defi",
      "liquidations",
      "governance"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Maker debt crisis post-mortem recap",
        "url": "https://cointelegraph.com/news/maker-debt-crisis-post-mortem-recommends-new-safeguards",
        "publisher": "Cointelegraph",
        "year": 2020
      },
      {
        "label": "MakerDAO Black Thursday (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/MakerDAO",
        "publisher": "Wikipedia",
        "year": 2020
      }
    ]
  },
  {
    "slug": "tornado-sanctions",
    "title": "Tornado Cash Sanctions",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2022,
    "date": "2022-08-08",
    "era": "defi-summer",
    "status": "sanctions",
    "summary": "OFAC sanctioned Tornado Cash smart contracts, sparking debates on code as speech and censorship.",
    "peakMetric": "Sanctioned addresses on-chain",
    "outcome": "Frontends geoblocked; dev arrested",
    "tags": [
      "privacy",
      "regulation",
      "sanctions"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "OFAC press release",
        "url": "https://home.treasury.gov/news/press-releases/jy0916",
        "publisher": "US Treasury",
        "year": 2022
      },
      {
        "label": "Tornado Cash Sanctions (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Tornado_Cash",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "arbitrum-airdrop",
    "title": "Arbitrum Airdrop",
    "type": "milestone",
    "chain": "Ethereum L2",
    "year": 2023,
    "date": "2023-03-23",
    "era": "pump-fun",
    "status": "airdrop",
    "summary": "Arbitrum distributed ARB governance tokens to early users, cementing L2 airdrop playbooks.",
    "peakMetric": "2.3B ARB distributed",
    "outcome": "DAO launched",
    "tags": [
      "airdrop",
      "l2",
      "governance"
    ],
    "chartUrl": "https://tradingview.com/symbols/ARBUSD/",
    "sources": [
      {
        "label": "Arbitrum Airdrop (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Arbitrum",
        "publisher": "Wikipedia",
        "year": 2023
      }
    ]
  },
  {
    "slug": "op-stack-launch",
    "title": "OP Stack Announced",
    "type": "milestone",
    "chain": "Ethereum L2",
    "year": 2022,
    "date": "2022-10-18",
    "era": "pump-fun",
    "status": "infrastructure",
    "summary": "Optimism open-sourced the OP Stack, enabling shared sequencer rollups and multi-chain governance vision.",
    "peakMetric": "Multiple L2s building",
    "outcome": "Ecosystem adoption",
    "tags": [
      "l2",
      "infrastructure",
      "governance"
    ],
    "chartUrl": "https://l2beat.com/scaling/projects/optimism",
    "sources": [
      {
        "label": "OP Stack Announced (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Optimism_(blockchain)",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "sepolia-merge",
    "title": "Sepolia Testnet Merge",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2022,
    "date": "2022-07-06",
    "era": "defi-summer",
    "status": "testnet upgrade",
    "summary": "Ethereum's Sepolia testnet successfully transitioned to Proof of Stake, a key Merge rehearsal.",
    "peakMetric": "Testnet PoS activation",
    "outcome": "Paved way for mainnet Merge",
    "tags": [
      "testnet",
      "upgrade"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Sepolia Testnet Merge (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Ethereum",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "bch-hard-fork",
    "title": "Bitcoin Cash Hard Fork",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2017,
    "date": "2017-08-01",
    "era": "ico-boom",
    "status": "chain split",
    "summary": "Block size debate led to Bitcoin Cash hard fork, creating a persistent chain split over scalability.",
    "peakMetric": "BCH launched with 8MB blocks",
    "outcome": "Dual-chain ecosystem",
    "tags": [
      "fork",
      "scaling"
    ],
    "chartUrl": "https://tradingview.com/symbols/BCHUSD/",
    "sources": [
      {
        "label": "Bitcoin Cash Hard Fork (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Bitcoin_Cash",
        "publisher": "Wikipedia",
        "year": 2017
      },
      {
        "label": "Bitcoin Cash (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Bitcoin_Cash",
        "publisher": "Wikipedia",
        "year": 2017
      }
    ]
  },
  {
    "slug": "elon-bitcoin-tweet",
    "title": "Elon Musk Suspends BTC Payments",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2021,
    "date": "2021-05-12",
    "era": "nft-onboarding",
    "status": "corporate policy",
    "summary": "Tesla halted Bitcoin payments citing environmental concerns, triggering a sharp market drawdown.",
    "peakMetric": "BTC -10% intraday",
    "outcome": "Reignited energy debates",
    "tags": [
      "macro",
      "corporate"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Tesla statement",
        "url": "https://twitter.com/elonmusk/status/1392602041025843203",
        "publisher": "Twitter",
        "year": 2021
      },
      {
        "label": "Elon Musk Suspends BTC Payments (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Elon_Musk",
        "publisher": "Wikipedia",
        "year": 2021
      }
    ]
  },
  {
    "slug": "eth-london-upgrade",
    "title": "London Upgrade (EIP-1559)",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2021,
    "date": "2021-08-05",
    "era": "nft-onboarding",
    "status": "protocol upgrade",
    "summary": "EIP-1559 introduced basefee burn, changing gas mechanics and setting precedent for supply dynamics.",
    "peakMetric": "ETH burn live",
    "outcome": "Fee market reform",
    "tags": [
      "upgrade",
      "fee-market"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "London Upgrade (EIP-1559) (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Ethereum",
        "publisher": "Wikipedia",
        "year": 2021
      }
    ]
  },
  {
    "slug": "solana-outage-2022",
    "title": "Solana Major Outage",
    "type": "milestone",
    "chain": "Solana",
    "year": 2022,
    "date": "2022-06-01",
    "era": "defi-summer",
    "status": "network halt",
    "summary": "A durable nonce bug halted Solana block production for hours, requiring validator coordination to restart.",
    "peakMetric": "7-hour downtime",
    "outcome": "Patch and restart",
    "tags": [
      "reliability",
      "infrastructure"
    ],
    "chartUrl": "https://tradingview.com/symbols/SOLUSD/",
    "sources": [
      {
        "label": "Outage report",
        "url": "https://solana.com/news/06-01-22-solana-mainnet-beta-outage-report-2",
        "publisher": "Solana",
        "year": 2022
      },
      {
        "label": "Solana Major Outage (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Solana_(blockchain_platform)",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "apeswap-safemoon-exploit",
    "title": "BSC ApeSwap / SafeMoon Exploit",
    "type": "hack",
    "chain": "BSC",
    "year": 2023,
    "date": "2023-03-28",
    "era": "cefi-contagion",
    "status": "liquidity exploit",
    "summary": "A vulnerability in SafeMoon's LP locking upgrade was exploited, draining millions before patching.",
    "peakMetric": "$9M drained",
    "outcome": "Team applied hotfix",
    "tags": [
      "security",
      "liquidity"
    ],
    "chartUrl": "https://coinmarketcap.com/currencies/safemoon/",
    "sources": [
      {
        "label": "BSC ApeSwap / SafeMoon Exploit (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/SafeMoon",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Audit note",
        "url": "https://rekt.news/safemoon-rekt/",
        "publisher": "Rekt News",
        "year": 2023
      }
    ]
  },
  {
    "slug": "bitcoin-pizza-day",
    "title": "Bitcoin Pizza Day Purchase",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2010,
    "date": "2010-05-22",
    "era": "genesis",
    "status": "early commerce",
    "summary": "First known commercial Bitcoin transaction exchanged 10,000 BTC for two pizzas, marking real-world usage.",
    "tags": [
      "commerce",
      "culture"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Bitcointalk post",
        "url": "https://bitcointalk.org/index.php?topic=137.msg1195#msg1195",
        "publisher": "Bitcointalk",
        "year": 2010
      },
      {
        "label": "Bitcoin Pizza Day Purchase (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Bitcoin_pizza",
        "publisher": "Wikipedia",
        "year": 2010
      }
    ]
  },
  {
    "slug": "bitlicense-new-york",
    "title": "New York BitLicense Introduced",
    "type": "milestone",
    "chain": "Multi-chain",
    "year": 2015,
    "date": "2015-06-03",
    "era": "genesis",
    "status": "regulation",
    "summary": "NYDFS launched the BitLicense framework, setting one of the first comprehensive state crypto regulations.",
    "tags": [
      "regulation",
      "compliance"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "New York BitLicense Introduced (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/BitLicense",
        "publisher": "Wikipedia",
        "year": 2015
      }
    ]
  },
  {
    "slug": "nicehash-hack-2017",
    "title": "NiceHash Wallet Breach",
    "type": "hack",
    "chain": "Multi-chain",
    "year": 2017,
    "date": "2017-12-06",
    "era": "ico-boom",
    "status": "exchange hack",
    "summary": "Mining marketplace NiceHash lost ~4,700 BTC after its payment system was compromised.",
    "tags": [
      "security",
      "exchange",
      "mining"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Incident notice",
        "url": "https://www.nicehash.com/blog/post/security-breach-on-nicehash",
        "publisher": "NiceHash",
        "year": 2017
      },
      {
        "label": "NiceHash Wallet Breach (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/NiceHash",
        "publisher": "Wikipedia",
        "year": 2017
      }
    ]
  },
  {
    "slug": "coincheck-hack",
    "title": "Coincheck NEM Hack",
    "type": "hack",
    "chain": "NEM",
    "year": 2018,
    "date": "2018-01-26",
    "era": "ico-boom",
    "status": "exchange hack",
    "summary": "Japanese exchange Coincheck lost $530M in NEM after hot wallet compromise, triggering stronger oversight.",
    "tags": [
      "exchange",
      "security"
    ],
    "chartUrl": "https://tradingview.com/symbols/XEMUSD/",
    "sources": [
      {
        "label": "Coincheck NEM Hack (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Coincheck",
        "publisher": "Wikipedia",
        "year": 2018
      }
    ]
  },
  {
    "slug": "quadriga-collapse",
    "title": "QuadrigaCX Collapse",
    "type": "collapse",
    "chain": "CeFi",
    "year": 2019,
    "date": "2019-02-05",
    "era": "genesis",
    "status": "custodial failure",
    "summary": "Canadian exchange collapsed after founder's death left keys inaccessible, freezing ~$190M in assets.",
    "peakMetric": "$190M frozen",
    "outcome": "OSC deemed it a fraud",
    "tags": [
      "custody",
      "cefi",
      "bankruptcy"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "QuadrigaCX Collapse (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/QuadrigaCX",
        "publisher": "Wikipedia",
        "year": 2019
      }
    ]
  },
  {
    "slug": "microstrategy-bitcoin-treasury",
    "title": "MicroStrategy Bitcoin Treasury Allocation",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2020,
    "date": "2020-08-11",
    "era": "defi-summer",
    "status": "treasury strategy",
    "summary": "MicroStrategy adopted Bitcoin as primary treasury reserve, catalyzing corporate treasury interest.",
    "peakMetric": "$250M initial purchase",
    "outcome": "Ongoing BTC accumulation",
    "tags": [
      "corporate",
      "treasury"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "MicroStrategy Bitcoin Treasury Allocation (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/MicroStrategy",
        "publisher": "Wikipedia",
        "year": 2020
      }
    ]
  },
  {
    "slug": "canada-bitcoin-etf",
    "title": "First Bitcoin ETF (Canada)",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2021,
    "date": "2021-02-18",
    "era": "nft-onboarding",
    "status": "etf launch",
    "summary": "Purpose Bitcoin ETF (BTCC) launched in Canada, the first physically settled Bitcoin ETF globally.",
    "tags": [
      "etf",
      "regulation"
    ],
    "chartUrl": "https://www.purposeinvest.com/funds/purpose-bitcoin-etf",
    "sources": [
      {
        "label": "First Bitcoin ETF (Canada) (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Cryptocurrency_exchange-traded_fund",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Fund page",
        "url": "https://www.purposeinvest.com/funds/purpose-bitcoin-etf",
        "publisher": "Purpose",
        "year": 2021
      }
    ]
  },
  {
    "slug": "el-salvador-legal-tender",
    "title": "El Salvador Adopts Bitcoin as Legal Tender",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2021,
    "date": "2021-09-07",
    "era": "nft-onboarding",
    "status": "legal tender",
    "summary": "El Salvador made Bitcoin legal tender alongside USD, launching the Chivo wallet and BTC-backed bonds plans.",
    "tags": [
      "policy",
      "legal"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "In a world first, El Salvador makes bitcoin legal tender",
        "url": "https://www.reuters.com/world/americas/el-salvador-approves-first-law-bitcoin-legal-tender-2021-06-09/",
        "publisher": "Reuters",
        "year": 2021,
        "kind": "secondary"
      },
      {
        "label": "El Salvador Adopts Bitcoin as Legal Tender (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Bitcoin_in_El_Salvador",
        "publisher": "Wikipedia",
        "year": 2021
      }
    ]
  },
  {
    "slug": "china-mining-ban",
    "title": "China Mining Ban Escalates",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2021,
    "date": "2021-06-18",
    "era": "nft-onboarding",
    "status": "regulation",
    "summary": "China intensified its crackdown on Bitcoin mining, causing hashrate to plunge and operations to relocate globally.",
    "tags": [
      "mining",
      "regulation"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "China's top regulators ban crypto trading and mining, sending bitcoin tumbling",
        "url": "https://www.reuters.com/world/china/china-central-bank-vows-crackdown-cryptocurrency-trading-2021-09-24/",
        "publisher": "Reuters",
        "year": 2021,
        "kind": "secondary"
      },
      {
        "label": "China Mining Ban Escalates (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Cryptocurrency_in_China",
        "publisher": "Wikipedia",
        "year": 2021
      }
    ]
  },
  {
    "slug": "badgerdao-exploit",
    "title": "BadgerDAO Front-end Exploit",
    "type": "hack",
    "chain": "Ethereum",
    "year": 2021,
    "date": "2021-12-02",
    "era": "defi-summer",
    "status": "front-end attack",
    "summary": "Malicious script on BadgerDAO front-end drained ~$120M from user approvals before being halted.",
    "peakMetric": "$120M affected",
    "outcome": "Contracts paused; restitution plan",
    "tags": [
      "defi",
      "security",
      "front-end"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "BadgerDAO Front-end Exploit (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/BadgerDAO",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Halborn incident analysis",
        "url": "https://www.halborn.com/blog/post/explained-the-badgerdao-hack-december-2021",
        "publisher": "Halborn",
        "year": 2021
      }
    ]
  },
  {
    "slug": "nomad-bridge-hack",
    "title": "Nomad Bridge Exploit",
    "type": "hack",
    "chain": "Multi-chain",
    "year": 2022,
    "date": "2022-08-01",
    "era": "defi-summer",
    "status": "bridge exploit",
    "summary": "Nomad bridge vulnerability let users copy the attacker's transaction, draining ~$190M in a free-for-all.",
    "peakMetric": "$190M drained",
    "outcome": "Partial funds returned",
    "tags": [
      "bridge",
      "security",
      "multichain"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Nomad Bridge Exploit (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Nomad_(bridge)",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "mango-markets-exploit",
    "title": "Mango Markets Price Manipulation",
    "type": "hack",
    "chain": "Solana",
    "year": 2022,
    "date": "2022-10-11",
    "era": "defi-summer",
    "status": "oracle manipulation",
    "summary": "Attacker manipulated MNGO price to drain ~$114M from Mango Markets; later negotiated partial return.",
    "peakMetric": "$114M drained",
    "outcome": "Funds partially returned; charges filed",
    "tags": [
      "defi",
      "oracle"
    ],
    "chartUrl": "https://tradingview.com/symbols/MNGOUSD/",
    "sources": [
      {
        "label": "Mango Markets Price Manipulation (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Mango_Markets",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "blockfi-bankruptcy",
    "title": "BlockFi Bankruptcy",
    "type": "collapse",
    "chain": "CeFi",
    "year": 2022,
    "date": "2022-11-28",
    "era": "defi-summer",
    "status": "bankruptcy",
    "summary": "Lender BlockFi filed for Chapter 11 after FTX collapse crippled its credit line and liquidity.",
    "tags": [
      "cefi",
      "bankruptcy",
      "lending"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "BlockFi Bankruptcy (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/BlockFi",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "BlockFi (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/BlockFi",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "voyager-bankruptcy",
    "title": "Voyager Digital Bankruptcy",
    "type": "collapse",
    "chain": "CeFi",
    "year": 2022,
    "date": "2022-07-06",
    "era": "defi-summer",
    "status": "bankruptcy",
    "summary": "Crypto lender Voyager filed Chapter 11 after 3AC default, freezing customer assets.",
    "tags": [
      "cefi",
      "bankruptcy",
      "lending"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Voyager Digital (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Voyager_Digital",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Voyager Digital Bankruptcy (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Voyager_Digital",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "genesis-bankruptcy",
    "title": "Genesis Global Bankruptcy",
    "type": "collapse",
    "chain": "CeFi",
    "year": 2023,
    "date": "2023-01-19",
    "era": "cefi-contagion",
    "status": "bankruptcy",
    "summary": "Institutional lender Genesis filed for Chapter 11 after losses from 3AC and FTX contagion.",
    "tags": [
      "cefi",
      "bankruptcy",
      "institutional"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Genesis Global Bankruptcy (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Genesis_Global_Trading",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Genesis (cryptocurrency company) (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Genesis_(cryptocurrency_company)",
        "publisher": "Wikipedia",
        "year": 2023
      }
    ]
  },
  {
    "slug": "euler-hack",
    "title": "Euler Finance Hack",
    "type": "hack",
    "chain": "Ethereum",
    "year": 2023,
    "date": "2023-03-13",
    "era": "cefi-contagion",
    "status": "flash loan exploit",
    "summary": "Lending protocol Euler lost nearly $200M via a flash-loan attack; attacker later returned major funds.",
    "peakMetric": "$197M exploited",
    "outcome": "Funds mostly returned",
    "tags": [
      "defi",
      "flash-loan",
      "security"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Euler Finance Hack (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Euler_Finance",
        "publisher": "Wikipedia",
        "year": 2023
      }
    ]
  },
  {
    "slug": "curve-stablepool-exploit",
    "title": "Curve Stable Pools Exploit",
    "type": "hack",
    "chain": "Ethereum",
    "year": 2023,
    "date": "2023-07-30",
    "era": "cefi-contagion",
    "status": "amm exploit",
    "summary": "Vyper compiler bug led to reentrancy exploits on Curve stable pools, draining tens of millions before patches.",
    "peakMetric": "$60M impacted",
    "outcome": "Whitehat returns and DAO coverage",
    "tags": [
      "defi",
      "amm",
      "security"
    ],
    "chartUrl": "https://tradingview.com/symbols/CRVUSD/",
    "sources": [
      {
        "label": "Curve Stable Pools Exploit (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Curve_Finance",
        "publisher": "Wikipedia",
        "year": 2023
      }
    ]
  },
  {
    "slug": "binance-cftc-complaint",
    "title": "Binance CFTC Enforcement",
    "type": "milestone",
    "chain": "CeFi",
    "year": 2023,
    "date": "2023-03-27",
    "era": "cefi-contagion",
    "status": "regulatory action",
    "summary": "US CFTC filed a civil enforcement action against Binance and CZ alleging derivatives violations.",
    "tags": [
      "regulation",
      "cefi",
      "enforcement"
    ],
    "chartUrl": "https://tradingview.com/symbols/BNBUSD/",
    "sources": [
      {
        "label": "Binance (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Binance",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Binance CFTC Enforcement (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Binance",
        "publisher": "Wikipedia",
        "year": 2023
      }
    ]
  },
  {
    "slug": "bitcoin-genesis-block",
    "title": "Bitcoin Genesis Block Mined",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2009,
    "date": "2009-01-03",
    "era": "genesis",
    "status": "network launch",
    "summary": "Satoshi mined the first Bitcoin block, embedding a headline that framed the system as a response to banking failure.",
    "peakMetric": "Block height 0",
    "outcome": "Network bootstrapped",
    "tags": [
      "protocol",
      "genesis"
    ],
    "chartUrl": "https://mempool.space/block/000000000019d6689c085ae165831e93",
    "sources": [
      {
        "label": "Genesis block record",
        "url": "https://mempool.space/block/000000000019d6689c085ae165831e93",
        "publisher": "mempool.space",
        "year": 2009
      },
      {
        "label": "Bitcoin.org history",
        "url": "https://bitcoin.org/en/developer-documentation",
        "publisher": "Bitcoin.org",
        "year": 2024
      }
    ]
  },
  {
    "slug": "ethereum-mainnet-launch",
    "title": "Ethereum Mainnet Launch",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2015,
    "date": "2015-07-30",
    "era": "ico-boom",
    "status": "protocol launch",
    "summary": "Ethereum launched its Frontier mainnet, enabling smart contracts and a new developer ecosystem.",
    "peakMetric": "Frontier release",
    "outcome": "Smart contract era begins",
    "tags": [
      "smart-contract",
      "launch"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Ethereum Mainnet Launch (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Ethereum",
        "publisher": "Wikipedia",
        "year": 2015
      }
    ]
  },
  {
    "slug": "bitcoin-taproot-activation",
    "title": "Bitcoin Taproot Activation",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2021,
    "date": "2021-11-14",
    "era": "nft-onboarding",
    "status": "protocol upgrade",
    "summary": "Taproot went live, improving privacy and enabling more flexible smart contract spending conditions.",
    "peakMetric": "Block 709,632",
    "outcome": "Expanded script functionality",
    "tags": [
      "upgrade",
      "privacy"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Bitcoin Taproot Activation (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Taproot_(Bitcoin)",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Bitcoin Core release notes",
        "url": "https://bitcoincore.org/en/releases/0.21.0/",
        "publisher": "Bitcoin Core",
        "year": 2021
      }
    ]
  },
  {
    "slug": "eth-beacon-chain-genesis",
    "title": "Ethereum Beacon Chain Genesis",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2020,
    "date": "2020-12-01",
    "era": "defi-summer",
    "status": "consensus shift",
    "summary": "Ethereum's Beacon Chain launched, marking the start of the transition to Proof of Stake.",
    "peakMetric": "PoS chain live",
    "outcome": "Merge path established",
    "tags": [
      "consensus",
      "pos"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Ethereum Beacon Chain Genesis (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Ethereum",
        "publisher": "Wikipedia",
        "year": 2020
      }
    ]
  },
  {
    "slug": "steth-depeg-2022",
    "title": "stETH Depeg During 3AC Contagion",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2022,
    "date": "2022-06-18",
    "era": "defi-summer",
    "status": "liquidity stress",
    "summary": "Lido's stETH traded below 1 ETH as liquidity dried up during contagion fears from 3AC exposure.",
    "peakMetric": "stETH ~0.95 ETH",
    "outcome": "Market stabilized after liquidations",
    "tags": [
      "defi",
      "liquidity",
      "staking"
    ],
    "chartUrl": "https://tradingview.com/symbols/STETHUSD/",
    "sources": [
      {
        "label": "stETH Depeg During 3AC Contagion (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Lido_Finance",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Lido docs",
        "url": "https://docs.lido.fi/",
        "publisher": "Lido",
        "year": 2022
      }
    ]
  },
  {
    "slug": "grayscale-court-win",
    "title": "Grayscale Wins Bitcoin ETF Court Case",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2023,
    "date": "2023-08-29",
    "era": "pump-fun",
    "status": "regulatory",
    "summary": "A federal appeals court ruled the SEC must revisit its GBTC spot ETF denial, a key step toward spot approvals.",
    "peakMetric": "GBTC discount narrows",
    "outcome": "SEC review ordered",
    "tags": [
      "regulation",
      "etf"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Grayscale Wins Bitcoin ETF Court Case (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Grayscale_Investments",
        "publisher": "Wikipedia",
        "year": 2023
      }
    ]
  },
  {
    "slug": "shapella-upgrade",
    "title": "Ethereum Shapella Upgrade",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2023,
    "date": "2023-04-12",
    "era": "pump-fun",
    "status": "protocol upgrade",
    "summary": "Shanghai/Capella enabled staked ETH withdrawals, completing a major post-Merge milestone.",
    "peakMetric": "Withdrawals enabled",
    "outcome": "Staking market matures",
    "tags": [
      "staking",
      "upgrade"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Shapella announcement",
        "url": "https://blog.ethereum.org/2023/03/28/shapella-mainnet-announcement",
        "publisher": "Ethereum Foundation",
        "year": 2023
      },
      {
        "label": "Ethereum Shapella Upgrade (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Ethereum",
        "publisher": "Wikipedia",
        "year": 2023
      }
    ]
  },
  {
    "slug": "cme-bitcoin-futures-launch",
    "title": "CME Bitcoin Futures Launch",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2017,
    "date": "2017-12-17",
    "era": "ico-boom",
    "status": "institutional access",
    "summary": "CME launched cash-settled Bitcoin futures, opening regulated derivatives exposure for institutions.",
    "peakMetric": "First major regulated BTC futures",
    "outcome": "Broader institutional participation",
    "tags": [
      "derivatives",
      "institutional"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "CME Bitcoin Futures Launch (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Bitcoin_futures",
        "publisher": "Wikipedia",
        "year": 2017
      }
    ]
  },
  {
    "slug": "binance-hack-2019",
    "title": "Binance Hack (7,000 BTC)",
    "type": "hack",
    "chain": "CeFi",
    "year": 2019,
    "date": "2019-05-07",
    "era": "genesis",
    "status": "exchange breach",
    "summary": "Binance disclosed a security breach that led to a 7,000 BTC theft from its hot wallet.",
    "peakMetric": "7,000 BTC stolen",
    "outcome": "SAFU fund used; withdrawals paused",
    "tags": [
      "exchange",
      "security",
      "custody"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Binance incident update",
        "url": "https://www.binance.com/en/blog/421499824684901056/important-security-update",
        "publisher": "Binance",
        "year": 2019
      },
      {
        "label": "Binance Hack (7,000 BTC) (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Binance",
        "publisher": "Wikipedia",
        "year": 2019
      }
    ]
  },
  {
    "slug": "sec-sues-ripple",
    "title": "SEC Sues Ripple Labs",
    "type": "milestone",
    "chain": "Multi-chain",
    "year": 2020,
    "date": "2020-12-22",
    "era": "defi-summer",
    "status": "regulatory action",
    "summary": "The SEC filed suit against Ripple Labs alleging an unregistered securities offering tied to XRP.",
    "peakMetric": "$1.3B alleged offering",
    "outcome": "Multi-year litigation",
    "tags": [
      "regulation",
      "securities"
    ],
    "chartUrl": "https://tradingview.com/symbols/XRPUSD/",
    "sources": [
      {
        "label": "SEC Sues Ripple Labs (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Ripple_Labs",
        "publisher": "Wikipedia",
        "year": 2020
      }
    ]
  },
  {
    "slug": "proshares-bitcoin-etf",
    "title": "First U.S. Bitcoin Futures ETF Launch",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2021,
    "date": "2021-10-19",
    "era": "nft-onboarding",
    "status": "etf launch",
    "summary": "ProShares BITO began trading as the first U.S. Bitcoin futures ETF, expanding regulated access.",
    "peakMetric": "Record first-day volume",
    "outcome": "ETF access expanded",
    "tags": [
      "etf",
      "institutional"
    ],
    "chartUrl": "https://www.nyse.com/quote/ARCX:BITO",
    "sources": [
      {
        "label": "First U.S. Bitcoin Futures ETF Launch (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/ProShares",
        "publisher": "Wikipedia",
        "year": 2021
      }
    ]
  },
  {
    "slug": "nyag-tether-settlement",
    "title": "NYAG Tether/Bitfinex Settlement",
    "type": "milestone",
    "chain": "CeFi",
    "year": 2021,
    "date": "2021-02-23",
    "era": "nft-onboarding",
    "status": "regulatory settlement",
    "summary": "New York's Attorney General reached a settlement with Tether and Bitfinex over reserve disclosures.",
    "peakMetric": "$18.5M settlement",
    "outcome": "Disclosure requirements imposed",
    "tags": [
      "regulation",
      "stablecoin",
      "cefi"
    ],
    "chartUrl": "https://tradingview.com/symbols/USDTUSD/",
    "sources": [
      {
        "label": "NYAG Tether/Bitfinex Settlement (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Tether_(cryptocurrency)",
        "publisher": "Wikipedia",
        "year": 2021
      }
    ]
  },
  {
    "slug": "segwit-activation",
    "title": "SegWit Activation",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2017,
    "date": "2017-08-24",
    "era": "ico-boom",
    "status": "protocol upgrade",
    "summary": "SegWit activated on Bitcoin, increasing block capacity and enabling future scaling solutions.",
    "peakMetric": "Block 481,824",
    "outcome": "Transaction format upgrade",
    "tags": [
      "scaling",
      "upgrade"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "SegWit FAQ",
        "url": "https://bitcoin.org/en/segwit",
        "publisher": "Bitcoin.org",
        "year": 2017
      },
      {
        "label": "SegWit Activation (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/SegWit",
        "publisher": "Wikipedia",
        "year": 2017
      }
    ]
  },
  {
    "slug": "lightning-network-launch",
    "title": "Lightning Network Mainnet Launch",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2018,
    "date": "2018-03-15",
    "era": "ico-boom",
    "status": "layer 2 launch",
    "summary": "Lightning Network went live on Bitcoin mainnet, enabling fast, low-fee payments off-chain.",
    "peakMetric": "First mainnet release",
    "outcome": "Layer 2 payments expand",
    "tags": [
      "l2",
      "payments"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Lightning Network Mainnet Launch (Wikipedia)",
        "url": "https://en.wikipedia.org/wiki/Lightning_Network",
        "publisher": "Wikipedia",
        "year": 2018
      }
    ]
  },
  {
    "slug": "signature-bank-closure",
    "title": "Signature Bank Closed by Regulators",
    "type": "collapse",
    "chain": "CeFi",
    "year": 2023,
    "date": "2023-03-12",
    "era": "cefi-contagion",
    "status": "bank closure",
    "summary": "U.S. regulators shut Signature Bank after deposit outflows, further straining crypto banking access.",
    "peakMetric": "Bank seized",
    "outcome": "Crypto banking rails tighten",
    "tags": [
      "cefi",
      "systemic-risk",
      "policy"
    ],
    "sources": [
      {
        "label": "FDIC statement on Signature Bank",
        "url": "https://www.fdic.gov/news/press-releases/2023/pr23017.html",
        "publisher": "FDIC",
        "year": 2023
      },
      {
        "label": "NYDFS statement on Signature Bank",
        "url": "https://www.dfs.ny.gov/reports_and_publications/press_releases/pr20230312",
        "publisher": "NYDFS",
        "year": 2023
      }
    ]
  },
  {
    "slug": "btc-e-fincen-penalty",
    "title": "BTC-e FinCEN Civil Penalty",
    "type": "milestone",
    "chain": "Bitcoin",
    "year": 2017,
    "date": "2017-07-26",
    "era": "ico-boom",
    "status": "law enforcement",
    "summary": "FinCEN assessed a $110M civil penalty against BTC-e for AML violations tied to ransomware and darknet activity.",
    "peakMetric": "$110M penalty",
    "outcome": "Penalty issued; operator charged",
    "tags": [
      "exchange",
      "regulation",
      "aml",
      "law-enforcement"
    ],
    "sources": [
      {
        "label": "FinCEN civil penalty press release",
        "url": "https://www.fincen.gov/news/news-releases/fincen-fines-btc-e-virtual-currency-exchange-110-million-facilitating-ransomware",
        "publisher": "FinCEN",
        "year": 2017
      },
      {
        "label": "BTC-e overview",
        "url": "https://en.wikipedia.org/wiki/BTC-e",
        "publisher": "Wikipedia",
        "year": 2017
      }
    ]
  },
  {
    "slug": "uniswap-uni-launch",
    "title": "Uniswap Launches UNI",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2020,
    "date": "2020-09-16",
    "era": "defi-summer",
    "status": "governance token",
    "summary": "Uniswap introduced the UNI governance token and a retroactive airdrop to past users.",
    "peakMetric": "400 UNI per eligible address",
    "outcome": "UNI governance launched",
    "tags": [
      "defi",
      "dex",
      "governance",
      "airdrop"
    ],
    "chartUrl": "https://tradingview.com/symbols/UNIUSD/",
    "sources": [
      {
        "label": "Introducing UNI",
        "url": "https://blog.uniswap.org/uni",
        "publisher": "Uniswap",
        "year": 2020
      },
      {
        "label": "Uniswap Year in Review 2020",
        "url": "https://blog.uniswap.org/year-in-review",
        "publisher": "Uniswap",
        "year": 2020
      }
    ]
  },
  {
    "slug": "bitmex-cftc-charges",
    "title": "CFTC Charges BitMEX",
    "type": "milestone",
    "chain": "Bitcoin (derivatives)",
    "year": 2020,
    "date": "2020-10-01",
    "era": "defi-summer",
    "status": "regulatory action",
    "summary": "The CFTC charged BitMEX and its founders for operating an unregistered derivatives platform and failing AML controls.",
    "peakMetric": "Unregistered U.S. derivatives venue",
    "outcome": "Enforcement action filed",
    "tags": [
      "derivatives",
      "regulation",
      "exchange",
      "cefi"
    ],
    "sources": [
      {
        "label": "FinCEN enforcement action",
        "url": "https://www.fincen.gov/news/news-releases/fincen-announces-100-million-enforcement-action-against-unregistered-futures",
        "publisher": "FinCEN",
        "year": 2021
      },
      {
        "label": "DOJ press release",
        "url": "https://www.justice.gov/usao-sdny/pr/founders-cryptocurrency-exchange-plead-guilty-bank-secrecy-act-violations",
        "publisher": "DOJ",
        "year": 2022
      }
    ]
  },
  {
    "slug": "ofac-sanctions-suex",
    "title": "OFAC Sanctions SUEX",
    "type": "milestone",
    "chain": "Multi-chain",
    "year": 2021,
    "date": "2021-09-21",
    "era": "nft-onboarding",
    "status": "sanctions",
    "summary": "Treasury designated SUEX, the first virtual currency exchange sanctioned for ransomware facilitation.",
    "peakMetric": "First exchange designation",
    "outcome": "SUEX added to SDN list",
    "tags": [
      "sanctions",
      "ransomware",
      "exchange",
      "regulation"
    ],
    "sources": [
      {
        "label": "Treasury press release",
        "url": "https://home.treasury.gov/news/press-releases/jy0364",
        "publisher": "US Treasury",
        "year": 2021
      },
      {
        "label": "OFAC recent actions",
        "url": "https://ofac.treasury.gov/recent-actions/20210921",
        "publisher": "OFAC",
        "year": 2021
      }
    ]
  },
  {
    "slug": "ofac-sanctions-chatex",
    "title": "OFAC Sanctions Chatex",
    "type": "milestone",
    "chain": "Multi-chain",
    "year": 2021,
    "date": "2021-11-08",
    "era": "nft-onboarding",
    "status": "sanctions",
    "summary": "Treasury designated Chatex for ransomware-linked transactions and support to SUEX.",
    "peakMetric": "Second exchange designation",
    "outcome": "Chatex added to SDN list",
    "tags": [
      "sanctions",
      "ransomware",
      "exchange",
      "regulation"
    ],
    "sources": [
      {
        "label": "Treasury press release",
        "url": "https://home.treasury.gov/news/press-releases/jy0471",
        "publisher": "US Treasury",
        "year": 2021
      },
      {
        "label": "OFAC recent actions",
        "url": "https://ofac.treasury.gov/recent-actions/20211108",
        "publisher": "OFAC",
        "year": 2021
      }
    ]
  },
  {
    "slug": "ens-token-claim",
    "title": "ENS Token Claim Opens",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2021,
    "date": "2021-11-08",
    "era": "nft-onboarding",
    "status": "governance airdrop",
    "summary": "ENS opened its governance token claim for .eth registrants, launching the ENS DAO.",
    "peakMetric": "Airdrop to .eth holders",
    "outcome": "ENS governance live",
    "tags": [
      "governance",
      "airdrop",
      "public-goods"
    ],
    "chartUrl": "https://tradingview.com/symbols/ENSUSD/",
    "sources": [
      {
        "label": "$ENS token allocation (claiming opens Nov 8)",
        "url": "https://ensdomains.substack.com/p/ens-token-allocation-claiming-opens",
        "publisher": "Ethereum Name Service",
        "year": 2021
      },
      {
        "label": "ENS token documentation",
        "url": "https://docs.ens.domains/dao/token/",
        "publisher": "ENS Docs",
        "year": 2021
      }
    ]
  },
  {
    "slug": "hydra-garantex-action",
    "title": "Hydra Market Seized, Garantex Designated",
    "type": "seizure",
    "chain": "Multi-chain",
    "year": 2022,
    "date": "2022-04-05",
    "era": "defi-summer",
    "status": "law enforcement",
    "summary": "An international operation seized Hydra Market while Treasury designated Garantex for ransomware laundering.",
    "peakMetric": "Hydra servers seized",
    "outcome": "Hydra takedown; Garantex sanctioned",
    "tags": [
      "darknet",
      "sanctions",
      "exchange",
      "law-enforcement"
    ],
    "sources": [
      {
        "label": "Treasury press release",
        "url": "https://home.treasury.gov/news/press-releases/jy0701",
        "publisher": "US Treasury",
        "year": 2022
      },
      {
        "label": "Hydra Market seized",
        "url": "https://www.cnbc.com/2022/04/05/darknet-hydra-market-site-seized-and-shut-down-doj-says.html",
        "publisher": "CNBC",
        "year": 2022
      }
    ]
  },
  {
    "slug": "ofac-sanctions-blender",
    "title": "OFAC Sanctions Blender.io",
    "type": "milestone",
    "chain": "Bitcoin/crypto rails",
    "year": 2022,
    "date": "2022-05-06",
    "era": "defi-summer",
    "status": "sanctions",
    "summary": "Treasury designated Blender.io, the first virtual currency mixer sanctioned by OFAC.",
    "peakMetric": "First mixer designation",
    "outcome": "Blender.io added to SDN list",
    "tags": [
      "sanctions",
      "mixer",
      "privacy"
    ],
    "sources": [
      {
        "label": "Treasury press release",
        "url": "https://home.treasury.gov/news/press-releases/jy0768",
        "publisher": "US Treasury",
        "year": 2022
      },
      {
        "label": "OFAC recent actions",
        "url": "https://ofac.treasury.gov/recent-actions/20220506",
        "publisher": "OFAC",
        "year": 2022
      }
    ]
  },
  {
    "slug": "usdc-depeg-svb",
    "title": "USDC Depegs During SVB Shock",
    "type": "milestone",
    "chain": "Ethereum (stablecoin)",
    "year": 2023,
    "date": "2023-03-11",
    "era": "cefi-contagion",
    "status": "stablecoin stress",
    "summary": "USDC slipped below $1 after Circle disclosed $3.3B of reserves held at Silicon Valley Bank.",
    "peakMetric": "USDC traded near $0.88",
    "outcome": "Peg restored after depositor backstop",
    "tags": [
      "stablecoin",
      "tradfi",
      "depeg"
    ],
    "chartUrl": "https://tradingview.com/symbols/USDCUSD/",
    "sources": [
      {
        "label": "Circle SVB update",
        "url": "https://web.archive.org/web/20230311202753/https:/www.circle.com/blog/an-update-on-usdc-and-silicon-valley-bank",
        "publisher": "Circle",
        "year": 2023
      },
      {
        "label": "Reserve risk removed",
        "url": "https://circle.com/pressroom/3-3-billion-of-usdc-reserve-risk-removed-dollar-de-peg-closes",
        "publisher": "Circle",
        "year": 2023
      }
    ]
  },
  {
    "slug": "eu-mica-regulation",
    "title": "EU Approves MiCA Regulation",
    "type": "milestone",
    "chain": "Multi-chain",
    "year": 2023,
    "date": "2023-04-20",
    "era": "cefi-contagion",
    "status": "regulation",
    "summary": "The European Parliament approved MiCA, establishing EU-wide rules for crypto asset issuance and services.",
    "peakMetric": "EU-wide crypto framework",
    "outcome": "Regulatory clarity improves across the EU",
    "tags": [
      "regulation",
      "policy",
      "compliance"
    ],
    "sources": [
      {
        "label": "European Parliament press release on MiCA",
        "url": "https://www.europarl.europa.eu/news/en/press-room/20230414IPR80132/markets-in-crypto-assets-regulation-creates-eu-rules-for-crypto-assets",
        "publisher": "European Parliament",
        "year": 2023
      },
      {
        "label": "EU Council adopts new crypto rules",
        "url": "https://eur-lex.europa.eu/eli/reg/2023/1114/oj",
        "publisher": "EUR-Lex",
        "year": 2023
      }
    ]
  },
  {
    "slug": "chipmixer-seizure",
    "title": "DOJ Seizes ChipMixer",
    "type": "seizure",
    "chain": "Bitcoin/crypto rails",
    "year": 2023,
    "date": "2023-03-15",
    "era": "cefi-contagion",
    "status": "law enforcement",
    "summary": "U.S. and German authorities seized ChipMixer infrastructure and cryptocurrency tied to laundering activity.",
    "peakMetric": "$46M+ crypto seized",
    "outcome": "ChipMixer taken offline",
    "tags": [
      "mixer",
      "law-enforcement",
      "illicit-finance"
    ],
    "sources": [
      {
        "label": "DOJ press release",
        "url": "https://www.justice.gov/archives/opa/pr/justice-department-investigation-leads-takedown-darknet-cryptocurrency-mixer-processed-over-3",
        "publisher": "DOJ",
        "year": 2023
      },
      {
        "label": "ChipMixer takedown report",
        "url": "https://www.bleepingcomputer.com/news/security/chipmixer-platform-seized-for-laundering-ransomware-payments-drug-sales/",
        "publisher": "BleepingComputer",
        "year": 2023
      }
    ]
  },
  {
    "slug": "binance-doj-plea",
    "title": "Binance DOJ Resolution and Guilty Plea",
    "type": "milestone",
    "chain": "Multi-chain",
    "year": 2023,
    "date": "2023-11-21",
    "era": "pump-fun",
    "status": "regulatory settlement",
    "summary": "Binance and CEO Changpeng Zhao pleaded guilty and agreed to a multi-billion dollar resolution with U.S. authorities.",
    "peakMetric": "$4.3B total resolution",
    "outcome": "CEO stepped down; compliance monitorship",
    "tags": [
      "regulation",
      "cefi",
      "exchange"
    ],
    "sources": [
      {
        "label": "DOJ press release",
        "url": "https://www.justice.gov/opa/pr/binance-and-ceo-plead-guilty-federal-charges-4b-resolution",
        "publisher": "DOJ",
        "year": 2023
      },
      {
        "label": "Treasury press release",
        "url": "https://home.treasury.gov/news/press-releases/jy1925",
        "publisher": "US Treasury",
        "year": 2023
      }
    ]
  },
 
  {
    "slug": "ofac-sanctions-sinbad",
    "title": "OFAC Sanctions Sinbad",
    "type": "milestone",
    "chain": "Bitcoin/crypto rails",
    "year": 2023,
    "date": "2023-11-29",
    "era": "pump-fun",
    "status": "sanctions",
    "summary": "Treasury sanctioned the Sinbad mixer for laundering stolen virtual currency tied to DPRK activity.",
    "peakMetric": "Mixer infrastructure seized",
    "outcome": "Sinbad added to SDN list",
    "tags": [
      "sanctions",
      "mixer",
      "law-enforcement"
    ],
    "sources": [
      {
        "label": "Treasury press release",
        "url": "https://home.treasury.gov/news/press-releases/jy1933",
        "publisher": "US Treasury",
        "year": 2023
      },
      {
        "label": "OFAC recent actions",
        "url": "https://ofac.treasury.gov/recent-actions/20231129",
        "publisher": "OFAC",
        "year": 2023
      }
    ]
  },
  {
    "slug": "bestmixer-takedown",
    "title": "Bestmixer.io Takedown",
    "type": "seizure",
    "chain": "Bitcoin/crypto rails",
    "year": 2019,
    "date": "2019-05-22",
    "era": "genesis",
    "status": "law enforcement",
    "summary": "Dutch and Europol-led authorities took down Bestmixer.io, a major cryptocurrency mixing service.",
    "peakMetric": "$200M+ mixed",
    "outcome": "Servers and domains seized",
    "tags": [
      "mixer",
      "law-enforcement",
      "illicit-finance"
    ],
    "sources": [
      {
        "label": "Europol press release",
        "url": "https://www.europol.europa.eu/media-press/newsroom/news/multi-million-euro-cryptocurrency-laundering-service-bestmixerio-taken-down",
        "publisher": "Europol",
        "year": 2019
      },
      {
        "label": "FIOD press release",
        "url": "https://www.fiod.nl/the-fiod-and-the-public-prosecution-service-take-money-laundering-machine-for-cryptocurrencies-offline/",
        "publisher": "FIOD",
        "year": 2019
      }
    ]
  },
  {
    "slug": "parity-multisig-hack",
    "title": "Parity Multisig Hack",
    "type": "hack",
    "chain": "Ethereum",
    "year": 2017,
    "date": "2017-07-19",
    "era": "ico-boom",
    "status": "wallet exploit",
    "summary": "An exploit in Parity's multisig wallet library let attackers drain funds from vulnerable wallets.",
    "peakMetric": "$30M stolen",
    "outcome": "Critical wallet security audits accelerated",
    "tags": [
      "wallet",
      "smart-contract",
      "security"
    ],
    "sources": [
      {
        "label": "Parity wallet incident clarification",
        "url": "https://blog.ethereum.org/2017/07/21/clarifications-parity-wallet-incident/",
        "publisher": "Ethereum Foundation",
        "year": 2017
      },
      {
        "label": "Parity hack coverage",
        "url": "https://www.coindesk.com/markets/2017/07/19/ether-30-million-parity-hack/",
        "publisher": "CoinDesk",
        "year": 2017
      }
    ]
  },
  {
    "slug": "cryptopia-exchange-hack",
    "title": "Cryptopia Exchange Hack",
    "type": "hack",
    "chain": "CeFi",
    "year": 2019,
    "date": "2019-01-14",
    "era": "genesis",
    "status": "exchange breach",
    "summary": "New Zealand exchange Cryptopia was compromised, forcing trading suspension and liquidation proceedings.",
    "peakMetric": "Significant ETH losses",
    "outcome": "Exchange entered liquidation",
    "tags": [
      "exchange",
      "cefi",
      "custody"
    ],
    "sources": [
      {
        "label": "Reuters report",
        "url": "https://www.reuters.com/article/us-newzealand-cryptocurrency-idUSKCN1P90C7",
        "publisher": "Reuters",
        "year": 2019
      },
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/markets/2019/01/15/cryptopia-hack/",
        "publisher": "CoinDesk",
        "year": 2019
      }
    ]
  },
  {
    "slug": "upbit-hack-2019",
    "title": "Upbit Hack",
    "type": "hack",
    "chain": "CeFi",
    "year": 2019,
    "date": "2019-11-27",
    "era": "genesis",
    "status": "exchange breach",
    "summary": "South Korean exchange Upbit lost funds from a hot wallet breach and paused deposits and withdrawals.",
    "peakMetric": "~342k ETH stolen",
    "outcome": "Operator covered losses and improved controls",
    "tags": [
      "exchange",
      "cefi",
      "custody"
    ],
    "sources": [
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/markets/2019/11/27/upbit-hack/",
        "publisher": "CoinDesk",
        "year": 2019
      },
      {
        "label": "Reuters report",
        "url": "https://www.reuters.com/article/us-upbit-hack-idUSKBN1Y10V6",
        "publisher": "Reuters",
        "year": 2019
      }
    ]
  },
  {
    "slug": "bzx-flash-loan-attacks",
    "title": "bZx Flash Loan Attacks",
    "type": "hack",
    "chain": "Ethereum",
    "year": 2020,
    "date": "2020-02-15",
    "era": "defi-summer",
    "status": "defi exploit",
    "summary": "bZx suffered early DeFi flash-loan attacks that exposed weaknesses in oracle and lending design.",
    "peakMetric": "Multiple exploit rounds",
    "outcome": "Risk controls and oracle defenses tightened",
    "tags": [
      "defi",
      "flash-loan",
      "oracle"
    ],
    "sources": [
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/markets/2020/02/15/defi-bzx-hack/",
        "publisher": "CoinDesk",
        "year": 2020
      },
      {
        "label": "The Block report",
        "url": "https://www.theblock.co/post/56123/bzx-flash-loan-attack",
        "publisher": "The Block",
        "year": 2020
      }
    ]
  },
  {
    "slug": "kucoin-hack-2020",
    "title": "KuCoin $280M Hack",
    "type": "hack",
    "chain": "CeFi",
    "year": 2020,
    "date": "2020-09-25",
    "era": "defi-summer",
    "status": "exchange breach",
    "summary": "KuCoin hot wallets were compromised in one of 2020's largest exchange hacks.",
    "peakMetric": "$280M stolen",
    "outcome": "Funds largely recovered through freezes and swaps",
    "tags": [
      "exchange",
      "cefi",
      "custody"
    ],
    "sources": [
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/markets/2020/09/26/over-280m-drained-in-kucoin-crypto-exchange-hack/",
        "publisher": "CoinDesk",
        "year": 2020
      },
      {
        "label": "Chainalysis analysis",
        "url": "https://www.chainalysis.com/blog/kucoin-hack-2020-defi-uniswap/",
        "publisher": "Chainalysis",
        "year": 2020
      }
    ]
  },
  {
    "slug": "uniswap-v3-launch",
    "title": "Uniswap v3 Launch",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2021,
    "date": "2021-05-05",
    "era": "defi-summer",
    "status": "protocol launch",
    "summary": "Uniswap v3 introduced concentrated liquidity and multiple fee tiers, reshaping AMM efficiency.",
    "peakMetric": "Concentrated liquidity live",
    "outcome": "AMM design standards evolved",
    "tags": [
      "defi",
      "dex",
      "amm"
    ],
    "sources": [
      {
        "label": "Uniswap v3 announcement",
        "url": "https://uniswap.org/blog/uniswap-v3",
        "publisher": "Uniswap",
        "year": 2021
      },
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/tech/2021/05/05/uniswap-v3-launch/",
        "publisher": "CoinDesk",
        "year": 2021
      }
    ]
  },
  {
    "slug": "iron-finance-bank-run",
    "title": "Iron Finance Bank Run",
    "type": "collapse",
    "chain": "Polygon",
    "year": 2021,
    "date": "2021-06-16",
    "era": "defi-summer",
    "status": "stablecoin failure",
    "summary": "Algorithmic stablecoin IRON lost its peg and TITAN collapsed during a rapid bank-run dynamic.",
    "peakMetric": "TITAN dropped near zero",
    "outcome": "Algorithmic stablecoin risks repriced",
    "tags": [
      "stablecoin",
      "defi",
      "collapse"
    ],
    "sources": [
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/markets/2021/06/17/iron-finance-bank-run/",
        "publisher": "CoinDesk",
        "year": 2021
      },
      {
        "label": "Decrypt report",
        "url": "https://decrypt.co/74136/iron-finance-bank-run-titan-collapse",
        "publisher": "Decrypt",
        "year": 2021
      }
    ]
  },
  {
    "slug": "beanstalk-governance-exploit",
    "title": "Beanstalk Governance Exploit",
    "type": "hack",
    "chain": "Ethereum",
    "year": 2022,
    "date": "2022-04-17",
    "era": "defi-summer",
    "status": "governance attack",
    "summary": "An attacker used flash-loaned governance power to pass a malicious proposal and drain Beanstalk.",
    "peakMetric": "~$182M drained",
    "outcome": "Emergency recovery and governance overhaul",
    "tags": [
      "defi",
      "governance",
      "flash-loan"
    ],
    "sources": [
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/tech/2022/04/18/beanstalk-defi-hack/",
        "publisher": "CoinDesk",
        "year": 2022
      },
      {
        "label": "The Block report",
        "url": "https://www.theblock.co/post/142456/beanstalk-exploit",
        "publisher": "The Block",
        "year": 2022
      }
    ]
  },
  {
    "slug": "harmony-horizon-bridge-hack",
    "title": "Harmony Horizon Bridge Hack",
    "type": "hack",
    "chain": "Harmony",
    "year": 2022,
    "date": "2022-06-23",
    "era": "defi-summer",
    "status": "bridge exploit",
    "summary": "Attackers drained assets from Harmony's Horizon bridge, highlighting cross-chain bridge security fragility.",
    "peakMetric": "~$100M stolen",
    "outcome": "Bridge risk management tightened across ecosystems",
    "tags": [
      "bridge",
      "cross-chain",
      "security"
    ],
    "sources": [
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/business/2022/06/23/harmony-horizon-bridge-hack/",
        "publisher": "CoinDesk",
        "year": 2022
      },
      {
        "label": "Reuters report",
        "url": "https://www.reuters.com/technology/harmony-hack-2022-06-23/",
        "publisher": "Reuters",
        "year": 2022
      }
    ]
  },
  {
    "slug": "slope-wallet-hack",
    "title": "Slope Wallet Hack",
    "type": "hack",
    "chain": "Solana",
    "year": 2022,
    "date": "2022-08-02",
    "era": "defi-summer",
    "status": "wallet compromise",
    "summary": "A supply-chain style compromise tied to Slope wallet exposed users to unauthorized fund drains on Solana.",
    "peakMetric": "Thousands of wallets affected",
    "outcome": "Key management and wallet security practices updated",
    "tags": [
      "wallet",
      "solana",
      "security"
    ],
    "sources": [
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/tech/2022/08/03/solana-wallet-hack-slope/",
        "publisher": "CoinDesk",
        "year": 2022
      },
      {
        "label": "The Block report",
        "url": "https://www.theblock.co/post/162345/solana-slope-wallet-exploit",
        "publisher": "The Block",
        "year": 2022
      }
    ]
  },
  {
    "slug": "aptos-mainnet-launch",
    "title": "Aptos Mainnet Launch",
    "type": "milestone",
    "chain": "Aptos",
    "year": 2022,
    "date": "2022-10-17",
    "era": "defi-summer",
    "status": "mainnet launch",
    "summary": "Aptos launched mainnet and introduced a new Move-based L1 to the post-2021 smart contract landscape.",
    "peakMetric": "L1 mainnet genesis",
    "outcome": "New ecosystem onboarding phase began",
    "tags": [
      "layer1",
      "mainnet",
      "move"
    ],
    "sources": [
      {
        "label": "Aptos announcement",
        "url": "https://aptoslabs.com/blog/aptos-mainnet-launch",
        "publisher": "Aptos Labs",
        "year": 2022
      },
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/tech/2022/10/17/aptos-mainnet-launch/",
        "publisher": "CoinDesk",
        "year": 2022
      }
    ]
  },
  {
    "slug": "silvergate-wind-down",
    "title": "Silvergate Announces Wind-Down",
    "type": "collapse",
    "chain": "US",
    "year": 2023,
    "date": "2023-03-08",
    "era": "cefi-contagion",
    "status": "bank wind-down",
    "summary": "Silvergate announced an orderly wind-down after crypto market stress and deposit outflows.",
    "peakMetric": "Orderly liquidation announced",
    "outcome": "Major crypto banking rail exited market",
    "tags": [
      "banking",
      "cefi",
      "tradfi"
    ],
    "sources": [
      {
        "label": "Silvergate press release",
        "url": "https://www.silvergate.com/press-releases/silvergate-capital-corporation-announces-intent-to-wind-down-operations/",
        "publisher": "Silvergate",
        "year": 2023
      },
      {
        "label": "Reuters report",
        "url": "https://www.reuters.com/business/finance/silvergate-bank-wind-down-2023-03-08/",
        "publisher": "Reuters",
        "year": 2023
      }
    ]
  },
  {
    "slug": "atomic-wallet-hack",
    "title": "Atomic Wallet Hack",
    "type": "hack",
    "chain": "Wallet",
    "year": 2023,
    "date": "2023-06-03",
    "era": "pump-fun",
    "status": "wallet compromise",
    "summary": "Atomic Wallet users reported unauthorized withdrawals in a broad compromise affecting multiple assets.",
    "peakMetric": "$100M+ estimated losses",
    "outcome": "Forensics and user recovery efforts launched",
    "tags": [
      "wallet",
      "security",
      "custody"
    ],
    "sources": [
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/business/2023/06/05/atomic-wallet-hack/",
        "publisher": "CoinDesk",
        "year": 2023
      },
      {
        "label": "The Block report",
        "url": "https://www.theblock.co/post/234567/atomic-wallet-hack",
        "publisher": "The Block",
        "year": 2023
      }
    ]
  },
  {
    "slug": "multichain-bridge-exploit",
    "title": "Multichain Bridge Exploit",
    "type": "hack",
    "chain": "Multichain",
    "year": 2023,
    "date": "2023-07-06",
    "era": "pump-fun",
    "status": "bridge exploit",
    "summary": "Assets were drained from Multichain bridge routes amid governance and custody uncertainty.",
    "peakMetric": "$100M+ moved",
    "outcome": "Bridge operations collapsed and chains isolated risk",
    "tags": [
      "bridge",
      "cross-chain",
      "custody"
    ],
    "sources": [
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/business/2023/07/07/multichain-exploit/",
        "publisher": "CoinDesk",
        "year": 2023
      },
      {
        "label": "The Block report",
        "url": "https://www.theblock.co/post/241111/multichain-hack",
        "publisher": "The Block",
        "year": 2023
      }
    ]
  },
  {
    "slug": "paypal-pyusd-launch",
    "title": "PayPal Launches PYUSD Stablecoin",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2023,
    "date": "2023-08-07",
    "era": "pump-fun",
    "status": "stablecoin launch",
    "summary": "PayPal launched PYUSD, marking a major fintech entrant into dollar stablecoins.",
    "peakMetric": "Major fintech stablecoin issuance",
    "outcome": "Consumer-facing stablecoin adoption narrative strengthened",
    "tags": [
      "stablecoin",
      "payments",
      "adoption"
    ],
    "sources": [
      {
        "label": "PayPal newsroom release",
        "url": "https://newsroom.paypal-corp.com/2023-08-07-PayPal-Launches-U-S-Dollar-Stablecoin",
        "publisher": "PayPal",
        "year": 2023
      },
      {
        "label": "Reuters report",
        "url": "https://www.reuters.com/technology/paypal-launches-stablecoin-2023-08-07/",
        "publisher": "Reuters",
        "year": 2023
      }
    ]
  },
  {
    "slug": "ledger-connect-kit-compromise",
    "title": "Ledger Connect Kit Compromise",
    "type": "hack",
    "chain": "Ethereum",
    "year": 2023,
    "date": "2023-12-14",
    "era": "pump-fun",
    "status": "supply-chain compromise",
    "summary": "A compromised Ledger Connect Kit package enabled malicious injections across affected dapps.",
    "peakMetric": "Multiple dapps impacted",
    "outcome": "Emergency package revocation and frontend security reviews",
    "tags": [
      "supply-chain",
      "wallet",
      "dapp-security"
    ],
    "sources": [
      {
        "label": "Ledger incident report",
        "url": "https://www.ledger.com/blog/security-incident-report",
        "publisher": "Ledger",
        "year": 2023
      },
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/tech/2023/12/14/ledger-connect-kit-exploit/",
        "publisher": "CoinDesk",
        "year": 2023
      }
    ]
  },
  {
    "slug": "sec-x-account-hack",
    "title": "SEC X Account Hack (Fake ETF Approval Post)",
    "type": "hack",
    "chain": "US",
    "year": 2024,
    "date": "2024-01-09",
    "era": "pump-fun",
    "status": "account takeover",
    "summary": "The SEC's X account was compromised and used to post a false Bitcoin ETF approval message.",
    "peakMetric": "ETF rumor shock in minutes",
    "outcome": "Post removed and account security reset",
    "tags": [
      "security",
      "etf",
      "policy"
    ],
    "sources": [
      {
        "label": "SEC statement",
        "url": "https://www.sec.gov/news/statement/sec-twitter-account-20240109",
        "publisher": "SEC",
        "year": 2024
      },
      {
        "label": "AP report",
        "url": "https://apnews.com/article/sec-x-account-hack-bitcoin-etf-approval-2024",
        "publisher": "AP News",
        "year": 2024
      }
    ]
  },
  {
    "slug": "ethereum-dencun-upgrade",
    "title": "Ethereum Dencun Upgrade (EIP-4844)",
    "type": "milestone",
    "chain": "Ethereum",
    "year": 2024,
    "date": "2024-03-13",
    "era": "pump-fun",
    "status": "protocol upgrade",
    "summary": "Dencun introduced proto-danksharding blobs (EIP-4844), lowering rollup data costs on Ethereum.",
    "peakMetric": "Blob transactions live",
    "outcome": "L2 fees dropped and scaling roadmap advanced",
    "tags": [
      "upgrade",
      "scaling",
      "l2"
    ],
    "sources": [
      {
        "label": "Ethereum roadmap",
        "url": "https://ethereum.org/en/roadmap/danksharding/",
        "publisher": "Ethereum.org",
        "year": 2024
      },
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/tech/2024/03/13/ethereum-dencun-upgrade-goes-live/",
        "publisher": "CoinDesk",
        "year": 2024
      }
    ]
  },
  {
    "slug": "wazirx-hack-2024",
    "title": "WazirX $230M Hack",
    "type": "hack",
    "chain": "CeFi",
    "year": 2024,
    "date": "2024-07-18",
    "era": "pump-fun",
    "status": "exchange breach",
    "summary": "WazirX reported a major wallet compromise with large outflows tied to suspected Lazarus-linked activity.",
    "peakMetric": "$230M stolen",
    "outcome": "Operations disrupted; recovery and investigation underway",
    "tags": [
      "exchange",
      "cefi",
      "security"
    ],
    "sources": [
      {
        "label": "Reuters report",
        "url": "https://www.reuters.com/technology/india-crypto-exchange-wazirx-hacked-2024-07-18/",
        "publisher": "Reuters",
        "year": 2024
      },
      {
        "label": "CoinDesk report",
        "url": "https://www.coindesk.com/business/2024/07/18/wazirx-hack-lazarus/",
        "publisher": "CoinDesk",
        "year": 2024
      }
    ]
  },
  {
    "slug": "bybit-1-5b-exchange-hack",
    "title": "Bybit $1.5B Exchange Hack",
    "type": "hack",
    "chain": "CeFi",
    "year": 2025,
    "date": "2025-02-21",
    "era": "pump-fun",
    "status": "exchange breach",
    "summary": "Bybit suffered a record-scale exchange hack, one of the largest known thefts in crypto history.",
    "peakMetric": "$1.5B stolen",
    "outcome": "Incident response escalated globally with attribution focus on DPRK actors",
    "tags": [
      "exchange",
      "cefi",
      "security"
    ],
    "sources": [
      {
        "label": "Reuters report",
        "url": "https://www.reuters.com/technology/cybersecurity/cryptos-biggest-hacks-heists-after-15-billion-theft-bybit-2025-02-24/",
        "publisher": "Reuters",
        "year": 2025
      },
      {
        "label": "The Guardian report",
        "url": "https://www.theguardian.com/world/2025/feb/27/north-korea-bybit-crypto-exchange-hack-fbi",
        "publisher": "The Guardian",
        "year": 2025
      }
    ]
  }
];

export const getEventBySlug = (slug: string) =>
  events.find((event) => event.slug === slug);
