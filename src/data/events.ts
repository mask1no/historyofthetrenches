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
    "era": "Silk Road Era",
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
        "label": "Wikipedia overview for Silk Road Marketplace Closure",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Silk%20Road%20Marketplace%20Closure",
        "publisher": "Wikipedia",
        "year": 2013
      },
      {
        "label": "Wikipedia overview for Silk Road Marketplace Closure (Bitcoin)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Silk%20Road%20Marketplace%20Closure%20Bitcoin",
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
    "era": "Silk Road Era",
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
        "label": "Wikipedia overview for Mt. Gox Collapse",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Mt.%20Gox%20Collapse",
        "publisher": "Wikipedia",
        "year": 2014
      },
      {
        "label": "Wikipedia overview for Mt. Gox Collapse (Bitcoin)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Mt.%20Gox%20Collapse%20Bitcoin",
        "publisher": "Wikipedia",
        "year": 2014
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
    "era": "ICO Boom",
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
        "label": "Wikipedia overview for The DAO Hack",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=The%20DAO%20Hack",
        "publisher": "Wikipedia",
        "year": 2016
      },
      {
        "label": "Wikipedia overview for The DAO Hack (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=The%20DAO%20Hack%20Ethereum",
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
    "era": "ICO Boom",
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
        "label": "Wikipedia overview for Binance Exchange Launch",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Binance%20Exchange%20Launch",
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
    "era": "ICO Boom",
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
        "year": 2018
      },
      {
        "label": "Wikipedia overview for Bitconnect Collapse",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Bitconnect%20Collapse",
        "publisher": "Wikipedia",
        "year": 2018
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
    "era": "ICO Boom",
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
        "label": "Wikipedia overview for Bitcoin 2017 Bull Run",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Bitcoin%202017%20Bull%20Run",
        "publisher": "Wikipedia",
        "year": 2017
      },
      {
        "label": "Wikipedia overview for Bitcoin 2017 Bull Run (Bitcoin)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Bitcoin%202017%20Bull%20Run%20Bitcoin",
        "publisher": "Wikipedia",
        "year": 2017
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
    "era": "ICO Boom",
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
        "label": "Wikipedia overview for Coinbase App Onboarding Boom",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Coinbase%20App%20Onboarding%20Boom",
        "publisher": "Wikipedia",
        "year": 2017
      },
      {
        "label": "Wikipedia overview for Coinbase App Onboarding Boom (Multi-chain)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Coinbase%20App%20Onboarding%20Boom%20Multi-chain",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for COVID-19 Black Swan",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=COVID-19%20Black%20Swan",
        "publisher": "Wikipedia",
        "year": 2020
      },
      {
        "label": "Wikipedia overview for COVID-19 Black Swan (Multi-chain)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=COVID-19%20Black%20Swan%20Multi-chain",
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
    "era": "DeFi Summer",
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
    "era": "DeFi Summer",
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
        "label": "Launch post",
        "url": "https://medium.com/iearn/yfi-distribution-df60226a40af",
        "publisher": "Yearn",
        "year": 2020
      },
      {
        "label": "Fair launch analysis",
        "url": "https://messari.io/report/yfi-yearn-finance",
        "publisher": "Messari",
        "year": 2020
      }
    ]
  },
  {
    "slug": "terra-luna-collapse",
    "title": "Terra/Luna Rugpull",
    "type": "rugpull",
    "chain": "Terra",
    "year": 2022,
    "date": "2022-05-09",
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for Terra/Luna Rugpull",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Terra%2FLuna%20Rugpull",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for Terra/Luna Rugpull (Terra)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Terra%2FLuna%20Rugpull%20Terra",
        "publisher": "Wikipedia",
        "year": 2022
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for Celsius Bankruptcy",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Celsius%20Bankruptcy",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for Celsius Bankruptcy (CeFi)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Celsius%20Bankruptcy%20CeFi",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for Three Arrows Capital Collapse",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Three%20Arrows%20Capital%20Collapse",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for Three Arrows Capital Collapse (Multi-chain)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Three%20Arrows%20Capital%20Collapse%20Multi-chain",
        "publisher": "Wikipedia",
        "year": 2022
      }
    ]
  },
  {
    "slug": "alameda-balance-sheet-leak",
    "title": "Alameda Balance Sheet Leak",
    "type": "hack",
    "chain": "CeFi",
    "year": 2022,
    "date": "2022-11-02",
    "era": "DeFi Summer",
    "status": "contagion catalyst",
    "summary": "Leaked financials showed heavy FTT collateral reliance, triggering market stress that preceded FTX collapse.",
    "peakMetric": "Billions in illiquid FTT",
    "outcome": "Liquidity crisis; run on FTX",
    "tags": [
      "cefi",
      "contagion",
      "ftt"
    ],
    "chartUrl": "https://tradingview.com/symbols/FTTUSD/",
    "sources": [
      {
        "label": "Wikipedia overview for Alameda Balance Sheet Leak",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Alameda%20Balance%20Sheet%20Leak",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for Alameda Balance Sheet Leak (CeFi)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Alameda%20Balance%20Sheet%20Leak%20CeFi",
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
    "era": "DeFi Summer",
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
        "year": 2022
      },
      {
        "label": "Wikipedia overview for FTX Exchange Collapse",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=FTX%20Exchange%20Collapse",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for FTX Exchange Collapse (CeFi)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=FTX%20Exchange%20Collapse%20CeFi",
        "publisher": "Wikipedia",
        "year": 2022
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for Axie Infinity Ronin Bridge Hack",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Axie%20Infinity%20Ronin%20Bridge%20Hack",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for Axie Infinity Ronin Bridge Hack (Ethereum/Sidechain)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Axie%20Infinity%20Ronin%20Bridge%20Hack%20Ethereum%2FSidechain",
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
    "era": "NFT Summer",
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
        "label": "Wikipedia overview for OpenSea Wyvern Exploit",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=OpenSea%20Wyvern%20Exploit",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for OpenSea Wyvern Exploit (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=OpenSea%20Wyvern%20Exploit%20Ethereum",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for Ethereum Merge",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Ethereum%20Merge",
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
    "era": "NFT Summer",
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
        "label": "Wikipedia overview for Coinbase NASDAQ Listing",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Coinbase%20NASDAQ%20Listing",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for Coinbase NASDAQ Listing (Multi-chain)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Coinbase%20NASDAQ%20Listing%20Multi-chain",
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
    "era": "NFT Summer",
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
    "era": "NFT Summer",
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
        "label": "Wikipedia overview for Dogecoin Meme Run",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Dogecoin%20Meme%20Run",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for Dogecoin Meme Run (Multi-chain)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Dogecoin%20Meme%20Run%20Multi-chain",
        "publisher": "Wikipedia",
        "year": 2021
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
    "era": "NFT Summer",
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
        "label": "Wikipedia overview for Shiba Inu Ascent",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Shiba%20Inu%20Ascent",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for Shiba Inu Ascent (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Shiba%20Inu%20Ascent%20Ethereum",
        "publisher": "Wikipedia",
        "year": 2021
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
    "era": "NFT Summer",
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
        "label": "Wikipedia overview for AnubisDAO Rugpull",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=AnubisDAO%20Rugpull",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for AnubisDAO Rugpull (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=AnubisDAO%20Rugpull%20Ethereum",
        "publisher": "Wikipedia",
        "year": 2021
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
    "era": "NFT Summer",
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
        "label": "Wikipedia overview for Thodex Exchange Exit Scam",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Thodex%20Exchange%20Exit%20Scam",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for Thodex Exchange Exit Scam (CeFi)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Thodex%20Exchange%20Exit%20Scam%20CeFi",
        "publisher": "Wikipedia",
        "year": 2021
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
    "era": "Pump.fun Era",
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
        "year": 2021
      },
      {
        "label": "Wikipedia overview for Squid Game Token Rugpull",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Squid%20Game%20Token%20Rugpull",
        "publisher": "Wikipedia",
        "year": 2021
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
    "era": "Pump.fun Era",
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
        "label": "Wikipedia overview for PEPE Meme Rally",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=PEPE%20Meme%20Rally",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Wikipedia overview for PEPE Meme Rally (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=PEPE%20Meme%20Rally%20Ethereum",
        "publisher": "Wikipedia",
        "year": 2023
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
    "era": "Pump.fun Era",
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
        "label": "Wikipedia overview for BONK on Solana",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=BONK%20on%20Solana",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Wikipedia overview for BONK on Solana (Solana)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=BONK%20on%20Solana%20Solana",
        "publisher": "Wikipedia",
        "year": 2023
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
    "era": "Pump.fun Era",
    "hallOfFame": true,
    "status": "ecosystem rebound",
    "summary": "SOL rebounded from post-FTX lows as developer activity, DeFi liquidity, and memecoin momentum reignited Solana demand.",
    "peakMetric": "$8 → $300",
    "outcome": "Network sentiment reversal",
    "tags": [
      "runner",
      "rebound",
      "defi"
    ],
    "chartUrl": "https://tradingview.com/symbols/SOLUSD/",
    "sources": [
      {
        "label": "Wikipedia overview for Solana Post-FTX Revival Run",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Solana%20Post-FTX%20Revival%20Run",
        "publisher": "Wikipedia",
        "year": 2024
      },
      {
        "label": "Wikipedia overview for Solana Post-FTX Revival Run (Solana)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Solana%20Post-FTX%20Revival%20Run%20Solana",
        "publisher": "Wikipedia",
        "year": 2024
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
    "era": "Pump.fun Era",
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
        "label": "Wikipedia overview for Pump.fun Era Emerges",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Pump.fun%20Era%20Emerges",
        "publisher": "Wikipedia",
        "year": 2024
      },
      {
        "label": "Wikipedia overview for Pump.fun Era Emerges (Solana)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Pump.fun%20Era%20Emerges%20Solana",
        "publisher": "Wikipedia",
        "year": 2024
      }
    ]
  },
  {
    "slug": "openclaw-moltbook-incident",
    "title": "Moltbook Agent Takeover Exposure",
    "type": "rugpull",
    "chain": "Solana",
    "year": 2026,
    "date": "2026-01-31",
    "era": "Pump.fun Era",
    "hallOfFame": true,
    "status": "platform integrity breach",
    "summary": "A backend exposure reportedly allowed outsiders to impersonate agents, edit posts, and manipulate visibility. That integrity break created fertile ground for multiple memecoin scams rather than a single isolated rugpull.",
    "peakMetric": "Agent impersonation + post edits",
    "outcome": "Exposure reported; access tightened after disclosure",
    "tags": [
      "launchpad",
      "exploit",
      "rugpull",
      "moltbook",
      "security",
      "integrity"
    ],
    "sources": [
      {
        "label": "Exposed Moltbook database report",
        "url": "https://www.404media.co/exposed-moltbook-database-let-anyone-take-control-of-any-ai-agent-on-the-site/",
        "publisher": "404 Media",
        "year": 2026
      },
      {
        "label": "Wiz research on exposed keys",
        "url": "https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys",
        "publisher": "Wiz",
        "year": 2026
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
    "era": "Pump.fun Era",
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
        "label": "Wikipedia overview for Bitcoin Spot ETF Approvals",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Bitcoin%20Spot%20ETF%20Approvals",
        "publisher": "Wikipedia",
        "year": 2024
      },
      {
        "label": "Wikipedia overview for Bitcoin Spot ETF Approvals (Bitcoin)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Bitcoin%20Spot%20ETF%20Approvals%20Bitcoin",
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
    "era": "DeFi Summer",
    "hallOfFame": true,
    "status": "long unraveling",
    "summary": "Controversial reflections token faced exploits, treasury drains, and lawsuits over locked liquidity promises.",
    "peakMetric": "$5B+ FDV peak",
    "outcome": "Ongoing legal actions",
    "tags": [
      "reflections",
      "controversial"
    ],
    "chartUrl": "https://coinmarketcap.com/currencies/safemoon/",
    "sources": [
      {
        "label": "Wikipedia overview for SafeMoon Liquidity Drain",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=SafeMoon%20Liquidity%20Drain",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for SafeMoon Liquidity Drain (BSC)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=SafeMoon%20Liquidity%20Drain%20BSC",
        "publisher": "Wikipedia",
        "year": 2021
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
    "era": "DeFi Summer",
    "hallOfFame": true,
    "status": "vault drained",
    "summary": "Meerkat Finance’s vault funds vanished shortly after launch, sparking a scramble across BSC as liquidity providers realized the contracts had been emptied.",
    "peakMetric": "$31M TVL drained",
    "outcome": "Project claimed exploit; users left with losses",
    "tags": [
      "defi",
      "rugpull"
    ],
    "sources": [
      {
        "label": "Wikipedia overview for Meerkat Finance Rugpull",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Meerkat%20Finance%20Rugpull",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for Meerkat Finance Rugpull (BSC)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Meerkat%20Finance%20Rugpull%20BSC",
        "publisher": "Wikipedia",
        "year": 2021
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
    "era": "Genesis",
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
    "era": "ICO Boom",
    "status": "crowdfund",
    "summary": "Ethereum raised funds via token presale, catalyzing the smart contract platform era and setting the ICO template.",
    "peakMetric": "$18M equivalent raise",
    "outcome": "Mainnet shipped 2015",
    "tags": [
      "ico",
      "smart-contracts"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Wikipedia overview for Ethereum ICO Launch",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Ethereum%20ICO%20Launch",
        "publisher": "Wikipedia",
        "year": 2014
      },
      {
        "label": "Wikipedia overview for Ethereum ICO Launch (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Ethereum%20ICO%20Launch%20Ethereum",
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
    "era": "NFT Summer",
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
        "label": "Wikipedia overview for CryptoKitties Chain Congestion",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=CryptoKitties%20Chain%20Congestion",
        "publisher": "Wikipedia",
        "year": 2017
      },
      {
        "label": "Wikipedia overview for CryptoKitties Chain Congestion (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=CryptoKitties%20Chain%20Congestion%20Ethereum",
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
    "era": "DeFi Summer",
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
        "label": "Launch post",
        "url": "https://medium.com/compound-finance/compound-community-governance-3c3b0b0e3cf0",
        "publisher": "Compound",
        "year": 2020
      },
      {
        "label": "Wikipedia overview for Compound Launches Yield Farming",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Compound%20Launches%20Yield%20Farming",
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
    "era": "NFT Summer",
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
        "label": "Wikipedia overview for Axie Infinity Play-to-Earn Peak",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Axie%20Infinity%20Play-to-Earn%20Peak",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for Axie Infinity Play-to-Earn Peak (Ethereum/Sidechain)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Axie%20Infinity%20Play-to-Earn%20Peak%20Ethereum%2FSidechain",
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
    "era": "Pump.fun Era",
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
        "label": "Wikipedia overview for Base Mainnet Launch",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Base%20Mainnet%20Launch",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Wikipedia overview for Base Mainnet Launch (Ethereum L2)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Base%20Mainnet%20Launch%20Ethereum%20L2",
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
    "era": "Pump.fun Era",
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
        "label": "Wikipedia overview for Bitcoin Ordinals Minting Launch",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Bitcoin%20Ordinals%20Minting%20Launch",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Wikipedia overview for Bitcoin Ordinals Minting Launch (Bitcoin)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Bitcoin%20Ordinals%20Minting%20Launch%20Bitcoin",
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
    "era": "Pump.fun Era",
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
        "label": "Wikipedia overview for Friend.tech Social Token Summer",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Friend.tech%20Social%20Token%20Summer",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Wikipedia overview for Friend.tech Social Token Summer (Base)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Friend.tech%20Social%20Token%20Summer%20Base",
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
    "era": "Pump.fun Era",
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
        "label": "Wikipedia overview for SBF Trial Verdict",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=SBF%20Trial%20Verdict",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Wikipedia overview for SBF Trial Verdict (CeFi)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=SBF%20Trial%20Verdict%20CeFi",
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
    "era": "ICO Boom",
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
        "label": "Wikipedia overview for Bitfinex Hack",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Bitfinex%20Hack",
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
    "era": "ICO Boom",
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
        "label": "Wikipedia overview for Parity Multisig Freeze",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Parity%20Multisig%20Freeze",
        "publisher": "Wikipedia",
        "year": 2017
      },
      {
        "label": "Wikipedia overview for Parity Multisig Freeze (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Parity%20Multisig%20Freeze%20Ethereum",
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
    "era": "DeFi Summer",
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
        "label": "Post-mortem",
        "url": "https://medium.com/yam-finance/yam-post-rescue-attempt-9793f28f0a0f",
        "publisher": "Yam Finance",
        "year": 2020
      },
      {
        "label": "Wikipedia overview for YAM Finance Launch Bug",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=YAM%20Finance%20Launch%20Bug",
        "publisher": "Wikipedia",
        "year": 2020
      },
      {
        "label": "Wikipedia overview for YAM Finance Launch Bug (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=YAM%20Finance%20Launch%20Bug%20Ethereum",
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
    "era": "NFT Summer",
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
        "label": "Wikipedia overview for Poly Network Hack",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Poly%20Network%20Hack",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for Poly Network Hack (Multi-chain)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Poly%20Network%20Hack%20Multi-chain",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for Wormhole Bridge Hack",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Wormhole%20Bridge%20Hack",
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
    "era": "DeFi Summer",
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
        "label": "Community recap",
        "url": "https://medium.com/@brianmct/the-makerdao-black-thursday-debacle-explained-20f9a2af6f63",
        "publisher": "Community",
        "year": 2020
      },
      {
        "label": "Wikipedia overview for MakerDAO Black Thursday",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=MakerDAO%20Black%20Thursday",
        "publisher": "Wikipedia",
        "year": 2020
      },
      {
        "label": "Wikipedia overview for MakerDAO Black Thursday (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=MakerDAO%20Black%20Thursday%20Ethereum",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for Tornado Cash Sanctions",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Tornado%20Cash%20Sanctions",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for Tornado Cash Sanctions (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Tornado%20Cash%20Sanctions%20Ethereum",
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
    "era": "Pump.fun Era",
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
        "label": "Wikipedia overview for Arbitrum Airdrop",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Arbitrum%20Airdrop",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Wikipedia overview for Arbitrum Airdrop (Ethereum L2)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Arbitrum%20Airdrop%20Ethereum%20L2",
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
    "era": "Pump.fun Era",
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
        "label": "Wikipedia overview for OP Stack Announced",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=OP%20Stack%20Announced",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for OP Stack Announced (Ethereum L2)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=OP%20Stack%20Announced%20Ethereum%20L2",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for Sepolia Testnet Merge",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Sepolia%20Testnet%20Merge",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for Sepolia Testnet Merge (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Sepolia%20Testnet%20Merge%20Ethereum",
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
    "era": "ICO Boom",
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
        "label": "Wikipedia overview for Bitcoin Cash Hard Fork",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Bitcoin%20Cash%20Hard%20Fork",
        "publisher": "Wikipedia",
        "year": 2017
      },
      {
        "label": "Background debate",
        "url": "https://blog.bitcoin.com/bitcoin-cash-hard-fork-august-1st-2017/",
        "publisher": "Bitcoin.com",
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
    "era": "NFT Summer",
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
        "label": "Wikipedia overview for Elon Musk Suspends BTC Payments",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Elon%20Musk%20Suspends%20BTC%20Payments",
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
    "era": "NFT Summer",
    "status": "protocol upgrade",
    "summary": "EIP-1559 introduced basefee burn, changing gas mechanics and setting precedent for supply dynamics.",
    "peakMetric": "ETH burn live",
    "outcome": "Fee market reform",
    "tags": [
      "upgrade",
      "eip1559"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Wikipedia overview for London Upgrade (EIP-1559) (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=London%20Upgrade%20(EIP-1559)%20Ethereum",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for London Upgrade (EIP-1559)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=London%20Upgrade%20(EIP-1559)",
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
    "era": "DeFi Summer",
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
        "url": "https://status.solana.com/incidents/rc5l5l6s8drs",
        "publisher": "Solana Status",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for Solana Major Outage",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Solana%20Major%20Outage",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for Solana Major Outage (Solana)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Solana%20Major%20Outage%20Solana",
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
    "era": "Pump.fun Era",
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
        "label": "Wikipedia overview for BSC ApeSwap / SafeMoon Exploit",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=BSC%20ApeSwap%20%2F%20SafeMoon%20Exploit",
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
    "era": "Genesis",
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
        "label": "Wikipedia overview for Bitcoin Pizza Day Purchase",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Bitcoin%20Pizza%20Day%20Purchase",
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
    "era": "Silk Road Era",
    "status": "regulation",
    "summary": "NYDFS launched the BitLicense framework, setting one of the first comprehensive state crypto regulations.",
    "tags": [
      "regulation",
      "compliance",
      "nydfs"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Wikipedia overview for New York BitLicense Introduced",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=New%20York%20BitLicense%20Introduced",
        "publisher": "Wikipedia",
        "year": 2015
      },
      {
        "label": "Wikipedia overview for New York BitLicense Introduced (Multi-chain)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=New%20York%20BitLicense%20Introduced%20Multi-chain",
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
    "era": "ICO Boom",
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
        "label": "Wikipedia overview for NiceHash Wallet Breach",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=NiceHash%20Wallet%20Breach",
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
    "era": "ICO Boom",
    "status": "exchange hack",
    "summary": "Japanese exchange Coincheck lost $530M in NEM after hot wallet compromise, triggering stronger oversight.",
    "tags": [
      "exchange",
      "security"
    ],
    "chartUrl": "https://tradingview.com/symbols/XEMUSD/",
    "sources": [
      {
        "label": "Wikipedia overview for Coincheck NEM Hack",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Coincheck%20NEM%20Hack",
        "publisher": "Wikipedia",
        "year": 2018
      },
      {
        "label": "Wikipedia overview for Coincheck NEM Hack (NEM)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Coincheck%20NEM%20Hack%20NEM",
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
    "era": "Silk Road Era",
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
        "label": "Wikipedia overview for QuadrigaCX Collapse",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=QuadrigaCX%20Collapse",
        "publisher": "Wikipedia",
        "year": 2019
      },
      {
        "label": "Wikipedia overview for QuadrigaCX Collapse (CeFi)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=QuadrigaCX%20Collapse%20CeFi",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for MicroStrategy Bitcoin Treasury Allocation",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=MicroStrategy%20Bitcoin%20Treasury%20Allocation",
        "publisher": "Wikipedia",
        "year": 2020
      },
      {
        "label": "Wikipedia overview for MicroStrategy Bitcoin Treasury Allocation (Bitcoin)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=MicroStrategy%20Bitcoin%20Treasury%20Allocation%20Bitcoin",
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
    "era": "NFT Summer",
    "status": "etf launch",
    "summary": "Purpose Bitcoin ETF (BTCC) launched in Canada, the first physically settled Bitcoin ETF globally.",
    "tags": [
      "etf",
      "regulation"
    ],
    "chartUrl": "https://www.purposeinvest.com/funds/purpose-bitcoin-etf",
    "sources": [
      {
        "label": "Wikipedia overview for First Bitcoin ETF (Canada)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=First%20Bitcoin%20ETF%20(Canada)",
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
    "era": "NFT Summer",
    "status": "legal tender",
    "summary": "El Salvador made Bitcoin legal tender alongside USD, launching the Chivo wallet and BTC-backed bonds plans.",
    "tags": [
      "policy",
      "legal"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Wikipedia overview for El Salvador Adopts Bitcoin as Legal Tender",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=El%20Salvador%20Adopts%20Bitcoin%20as%20Legal%20Tender",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for El Salvador Adopts Bitcoin as Legal Tender (Bitcoin)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=El%20Salvador%20Adopts%20Bitcoin%20as%20Legal%20Tender%20Bitcoin",
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
    "era": "NFT Summer",
    "status": "regulation",
    "summary": "China intensified its crackdown on Bitcoin mining, causing hashrate to plunge and operations to relocate globally.",
    "tags": [
      "mining",
      "regulation"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Wikipedia overview for China Mining Ban Escalates",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=China%20Mining%20Ban%20Escalates",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for China Mining Ban Escalates (Bitcoin)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=China%20Mining%20Ban%20Escalates%20Bitcoin",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for BadgerDAO Front-end Exploit",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=BadgerDAO%20Front-end%20Exploit",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Post-mortem",
        "url": "https://badgerdao.medium.com/post-mortem-badgerdao-incident-2021-bf8b7c3f8e6",
        "publisher": "BadgerDAO",
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
    "era": "DeFi Summer",
    "status": "bridge exploit",
    "summary": "Nomad bridge vulnerability let users copy the attacker’s transaction, draining ~$190M in a free-for-all.",
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
        "label": "Wikipedia overview for Nomad Bridge Exploit",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Nomad%20Bridge%20Exploit",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for Nomad Bridge Exploit (Multi-chain)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Nomad%20Bridge%20Exploit%20Multi-chain",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for Mango Markets Price Manipulation",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Mango%20Markets%20Price%20Manipulation",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for Mango Markets Price Manipulation (Solana)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Mango%20Markets%20Price%20Manipulation%20Solana",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for BlockFi Bankruptcy",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=BlockFi%20Bankruptcy",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Court filing",
        "url": "https://restructuring.ra.kroll.com/blockfi/",
        "publisher": "Kroll",
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
    "era": "DeFi Summer",
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
        "label": "Court docs",
        "url": "https://cases.stretto.com/Voyager",
        "publisher": "Stretto",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for Voyager Digital Bankruptcy",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Voyager%20Digital%20Bankruptcy",
        "publisher": "Wikipedia",
        "year": 2022
      },
      {
        "label": "Wikipedia overview for Voyager Digital Bankruptcy (CeFi)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Voyager%20Digital%20Bankruptcy%20CeFi",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for Genesis Global Bankruptcy",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Genesis%20Global%20Bankruptcy",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Court docket",
        "url": "https://restructuring.ra.kroll.com/genesis",
        "publisher": "Kroll",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for Euler Finance Hack",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Euler%20Finance%20Hack",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Wikipedia overview for Euler Finance Hack (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Euler%20Finance%20Hack%20Ethereum",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for Curve Stable Pools Exploit",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Curve%20Stable%20Pools%20Exploit",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Wikipedia overview for Curve Stable Pools Exploit (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Curve%20Stable%20Pools%20Exploit%20Ethereum",
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
    "era": "DeFi Summer",
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
        "label": "CFTC press release",
        "url": "https://www.cftc.gov/PressRoom/PressReleases/8680-23",
        "publisher": "CFTC",
        "year": 2023
      },
      {
        "label": "Wikipedia overview for Binance CFTC Enforcement",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Binance%20CFTC%20Enforcement",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Wikipedia overview for Binance CFTC Enforcement (CeFi)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Binance%20CFTC%20Enforcement%20CeFi",
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
    "era": "Genesis",
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
    "era": "ICO Boom",
    "status": "protocol launch",
    "summary": "Ethereum launched its Frontier mainnet, enabling smart contracts and a new developer ecosystem.",
    "peakMetric": "Frontier release",
    "outcome": "Smart contract era begins",
    "tags": [
      "smart-contracts",
      "launch"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Wikipedia overview for Ethereum Mainnet Launch",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Ethereum%20Mainnet%20Launch",
        "publisher": "Wikipedia",
        "year": 2015
      },
      {
        "label": "Wikipedia overview for Ethereum Mainnet Launch (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Ethereum%20Mainnet%20Launch%20Ethereum",
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
    "era": "NFT Summer",
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
        "label": "Wikipedia overview for Bitcoin Taproot Activation",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Bitcoin%20Taproot%20Activation",
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
    "era": "DeFi Summer",
    "status": "consensus shift",
    "summary": "Ethereum’s Beacon Chain launched, marking the start of the transition to Proof of Stake.",
    "peakMetric": "PoS chain live",
    "outcome": "Merge path established",
    "tags": [
      "consensus",
      "pos"
    ],
    "chartUrl": "https://tradingview.com/symbols/ETHUSD/",
    "sources": [
      {
        "label": "Wikipedia overview for Ethereum Beacon Chain Genesis",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Ethereum%20Beacon%20Chain%20Genesis",
        "publisher": "Wikipedia",
        "year": 2020
      },
      {
        "label": "Wikipedia overview for Ethereum Beacon Chain Genesis (Ethereum)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Ethereum%20Beacon%20Chain%20Genesis%20Ethereum",
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
    "era": "DeFi Summer",
    "status": "liquidity stress",
    "summary": "Lido’s stETH traded below 1 ETH as liquidity dried up during contagion fears from 3AC exposure.",
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
        "label": "Wikipedia overview for stETH Depeg During 3AC Contagion",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=stETH%20Depeg%20During%203AC%20Contagion",
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
    "era": "Pump.fun Era",
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
        "label": "Wikipedia overview for Grayscale Wins Bitcoin ETF Court Case",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Grayscale%20Wins%20Bitcoin%20ETF%20Court%20Case",
        "publisher": "Wikipedia",
        "year": 2023
      },
      {
        "label": "Wikipedia overview for Grayscale Wins Bitcoin ETF Court Case (Bitcoin)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Grayscale%20Wins%20Bitcoin%20ETF%20Court%20Case%20Bitcoin",
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
    "era": "Pump.fun Era",
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
        "label": "Wikipedia overview for Ethereum Shapella Upgrade",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Ethereum%20Shapella%20Upgrade",
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
    "era": "ICO Boom",
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
        "label": "Wikipedia overview for CME Bitcoin Futures Launch",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=CME%20Bitcoin%20Futures%20Launch",
        "publisher": "Wikipedia",
        "year": 2017
      },
      {
        "label": "Wikipedia overview for CME Bitcoin Futures Launch (Bitcoin)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=CME%20Bitcoin%20Futures%20Launch%20Bitcoin",
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
    "era": "Silk Road Era",
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
        "label": "Wikipedia overview for Binance Hack (7,000 BTC)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Binance%20Hack%20(7%2C000%20BTC)",
        "publisher": "Wikipedia",
        "year": 2019
      },
      {
        "label": "Wikipedia overview for Binance Hack (7,000 BTC) (CeFi)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Binance%20Hack%20(7%2C000%20BTC)%20CeFi",
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
    "era": "DeFi Summer",
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
        "label": "Wikipedia overview for SEC Sues Ripple Labs",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=SEC%20Sues%20Ripple%20Labs",
        "publisher": "Wikipedia",
        "year": 2020
      },
      {
        "label": "Wikipedia overview for SEC Sues Ripple Labs (Multi-chain)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=SEC%20Sues%20Ripple%20Labs%20Multi-chain",
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
    "era": "NFT Summer",
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
        "label": "Wikipedia overview for First U.S. Bitcoin Futures ETF Launch",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=First%20U.S.%20Bitcoin%20Futures%20ETF%20Launch",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for First U.S. Bitcoin Futures ETF Launch (Bitcoin)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=First%20U.S.%20Bitcoin%20Futures%20ETF%20Launch%20Bitcoin",
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
    "era": "NFT Summer",
    "status": "regulatory settlement",
    "summary": "New York’s Attorney General reached a settlement with Tether and Bitfinex over reserve disclosures.",
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
        "label": "Wikipedia overview for NYAG Tether/Bitfinex Settlement",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=NYAG%20Tether%2FBitfinex%20Settlement",
        "publisher": "Wikipedia",
        "year": 2021
      },
      {
        "label": "Wikipedia overview for NYAG Tether/Bitfinex Settlement (CeFi)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=NYAG%20Tether%2FBitfinex%20Settlement%20CeFi",
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
    "era": "ICO Boom",
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
        "label": "Wikipedia overview for SegWit Activation",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=SegWit%20Activation",
        "publisher": "Wikipedia",
        "year": 2017
      },
      {
        "label": "Wikipedia overview for SegWit Activation (Bitcoin)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=SegWit%20Activation%20Bitcoin",
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
    "era": "ICO Boom",
    "status": "layer 2 launch",
    "summary": "Lightning Network went live on Bitcoin mainnet, enabling fast, low-fee payments off-chain.",
    "peakMetric": "First mainnet release",
    "outcome": "Layer 2 payments expand",
    "tags": [
      "layer-2",
      "payments"
    ],
    "chartUrl": "https://tradingview.com/symbols/BTCUSD/",
    "sources": [
      {
        "label": "Wikipedia overview for Lightning Network Mainnet Launch",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Lightning%20Network%20Mainnet%20Launch",
        "publisher": "Wikipedia",
        "year": 2018
      },
      {
        "label": "Wikipedia overview for Lightning Network Mainnet Launch (Bitcoin)",
        "url": "https://en.wikipedia.org/wiki/Special:Search?search=Lightning%20Network%20Mainnet%20Launch%20Bitcoin",
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
    "era": "CeFi Contagion",
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
    "era": "ICO Boom",
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
    "era": "DeFi Summer",
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
    "era": "DeFi Summer",
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
        "label": "CFTC press release",
        "url": "https://www.cftc.gov/PressRoom/PressReleases/8270-20",
        "publisher": "CFTC",
        "year": 2020
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
    "era": "NFT Summer",
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
    "era": "NFT Summer",
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
    "era": "NFT Summer",
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
        "label": "$ENS now available for claiming",
        "url": "https://ens.mirror.xyz/5cGl-Y37aTxtokdWk21qlULmE1aSM_NuX9fstbOPoWU",
        "publisher": "ENS",
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
    "era": "DeFi Summer",
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
    "era": "DeFi Summer",
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
    "era": "DeFi Summer",
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
        "url": "https://www.circle.com/en/pressroom/3.3-billion-of-usdc-reserve-risk-removed-dollar-de-peg-closes",
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
    "era": "CeFi Contagion",
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
    "era": "DeFi Summer",
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
    "era": "Pump.fun Era",
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
    "era": "Pump.fun Era",
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
    "era": "Silk Road Era",
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
      }
    ]
  }
];

export const getEventBySlug = (slug: string) =>
  events.find((event) => event.slug === slug);
