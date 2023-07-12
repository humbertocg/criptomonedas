export interface IWeiss {
  Rating: string;
  TechnologyAdoptionRating: string;
  MarketPerformanceRating: string;
}
export interface IRating {
  Weiss: IWeiss;
}

export interface ICoinInfo {
  Id: string;
  Name: string;
  FullName: string;
  Internal: string;
  ImageUrl: string;
  Url: string;
  Algorithm: string;
  ProofType: string;
  Rating: IRating;
  NetHashesPerSecond: Number;
  BlockNumber: Number;
  BlockTime: Number;
  BlockReward: Number;
  AssetLaunchDate: string;
  MaxSupply: Number;
  Type: Number;
  DocumentType: string;
}

export interface IMetaData {
  count: Number;
}

export interface IDataItem {
  CoinInfo: ICoinInfo;
}

export interface ICryptoCurrency {
  Message: string;
  MetaData: IMetaData;
  Data: IDataItem[];
}
