//check for quick convertion from json to typescript interface
//https://transform.tools/json-to-typescript

export interface IConversionCurrency {
  RAW: Raw;
  DISPLAY: Display;
}

// expected a key value structure. Key name is going to change when user request a currency (BTC, ETH, etc)
export interface Raw {
  [key: string]: cryptoCurrency1;
}

// expected a key value structure. Key name is going to change when user request a currency (USD, MXN, etc)
export interface cryptoCurrency1 {
  [key: string]: detailsRaw;
}

export interface detailsRaw {
  TYPE: string;
  MARKET: string;
  FROMSYMBOL: string;
  TOSYMBOL: string;
  FLAGS: string;
  PRICE: number;
  LASTUPDATE: number;
  MEDIAN: number;
  LASTVOLUME: number;
  LASTVOLUMETO: number;
  LASTTRADEID: string;
  VOLUMEDAY: number;
  VOLUMEDAYTO: number;
  VOLUME24HOUR: number;
  VOLUME24HOURTO: number;
  OPENDAY: number;
  HIGHDAY: number;
  LOWDAY: number;
  OPEN24HOUR: number;
  HIGH24HOUR: number;
  LOW24HOUR: number;
  LASTMARKET: string;
  VOLUMEHOUR: number;
  VOLUMEHOURTO: number;
  OPENHOUR: number;
  HIGHHOUR: number;
  LOWHOUR: number;
  TOPTIERVOLUME24HOUR: number;
  TOPTIERVOLUME24HOURTO: number;
  CHANGE24HOUR: number;
  CHANGEPCT24HOUR: number;
  CHANGEDAY: number;
  CHANGEPCTDAY: number;
  CHANGEHOUR: number;
  CHANGEPCTHOUR: number;
  CONVERSIONTYPE: string;
  CONVERSIONSYMBOL: string;
  CONVERSIONLASTUPDATE: number;
  SUPPLY: number;
  MKTCAP: number;
  MKTCAPPENALTY: number;
  CIRCULATINGSUPPLY: number;
  CIRCULATINGSUPPLYMKTCAP: number;
  TOTALVOLUME24H: number;
  TOTALVOLUME24HTO: number;
  TOTALTOPTIERVOLUME24H: number;
  TOTALTOPTIERVOLUME24HTO: number;
  IMAGEURL: string;
}

// expected a key value structure. Key name is going to change when user request a currency (BTC, ETH, etc)
export interface Display {
  [key: string]: cryptoCurrencyDisplay;
}

// expected a key value structure. Key name is going to change when user request a currency (USD, MXN, etc)
export interface cryptoCurrencyDisplay {
  [key: string]: detailsDisplay;
}

export interface detailsDisplay {
  FROMSYMBOL: string;
  TOSYMBOL: string;
  MARKET: string;
  PRICE: string;
  LASTUPDATE: string;
  LASTVOLUME: string;
  LASTVOLUMETO: string;
  LASTTRADEID: string;
  VOLUMEDAY: string;
  VOLUMEDAYTO: string;
  VOLUME24HOUR: string;
  VOLUME24HOURTO: string;
  OPENDAY: string;
  HIGHDAY: string;
  LOWDAY: string;
  OPEN24HOUR: string;
  HIGH24HOUR: string;
  LOW24HOUR: string;
  LASTMARKET: string;
  VOLUMEHOUR: string;
  VOLUMEHOURTO: string;
  OPENHOUR: string;
  HIGHHOUR: string;
  LOWHOUR: string;
  TOPTIERVOLUME24HOUR: string;
  TOPTIERVOLUME24HOURTO: string;
  CHANGE24HOUR: string;
  CHANGEPCT24HOUR: string;
  CHANGEDAY: string;
  CHANGEPCTDAY: string;
  CHANGEHOUR: string;
  CHANGEPCTHOUR: string;
  CONVERSIONTYPE: string;
  CONVERSIONSYMBOL: string;
  CONVERSIONLASTUPDATE: string;
  SUPPLY: string;
  MKTCAP: string;
  MKTCAPPENALTY: string;
  CIRCULATINGSUPPLY: string;
  CIRCULATINGSUPPLYMKTCAP: string;
  TOTALVOLUME24H: string;
  TOTALVOLUME24HTO: string;
  TOTALTOPTIERVOLUME24H: string;
  TOTALTOPTIERVOLUME24HTO: string;
  IMAGEURL: string;
}

/**
 * Expected structure when user requests for BTC to USD
 * {
  "RAW": {
    "BTC": {
      "USD": {
        "TYPE": "5",
        "MARKET": "CCCAGG",
        ...
      }
    }
  },
  "DISPLAY": {
    "BTC": {
      "USD": {
        "FROMSYMBOL": "$",
        "TOSYMBOL": "Ƀ",
        ...
      }
    }
  }
}

Expected structure when user requests for BTC to MXN
{
  "RAW": {
    "BTC": {
      "MXN": {
        "TYPE": "5",
        "MARKET": "CCCAGG",
        ...
      }
    }
  },
  "DISPLAY": {
    "BTC": {
      "MXN": {
        "FROMSYMBOL": "MXN",
        "TOSYMBOL": "Ƀ",
        ...
      }
    }
  }
}
 */
