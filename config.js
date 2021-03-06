module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  // PARSE_EMODE: "",
  CHAT_ID: process.env.CHAT_ID,
  TESTING: (process.env.TESTING === 'true'),  // Ignore, unless you want to send alerts to a seperate channel while testing, set this to true
  TEST_CHAT_ID: (process.env.TEST_CHAT_ID?process.env.TEST_CHAT_ID:""), // Used when "TESTING" is set to true.
  
  /**
   * These are only names of existing exchanges.
   * 
   * Just adding the name will not add the exchange to the subscriptions.
   * If you add an exchange here, you also have to implement it. :)
   */
  exchanges: {
    "binance": true, 
    "bitfinex": false, 
    "coinbase": false
  },

  currencies: [
    "BTCUSD", "ETHUSD", "EOSUSD", "LTCUSD", "BNBUSD", "XTZUSD", "MATICUSD", "XRPUSD", "ADAUSD", // USD Comparative (use USD even for USDT)
    "ETHBTC", "EOSBTC", "LTCBTC",  // BTC Comparative
  ],
  
  trade: {
    alerts: true,
    min_worth: {  // Used while migrating alert limits to the database
      default: 700, // Default value for when specific value is not specified below
      BTC: 1000,
      LTC: 450 ,
      ETH: 650,
      EOS: 600
    }
  },
  
  order: {
    alerts: true,
    min_worth: {  // Used while migrating alert limits to the database
      default: 7000, // Default value for when specific value is not specified below
      BTC: 1000,
      LTC: 5000
    }
  }
}
