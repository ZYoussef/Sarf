import { CurrencyExchange } from "../currencyExchange/CurrencyExchange";
import { ExchangeOffice } from "../exchangeOffice/ExchangeOffice";

export type Currency = {
  buyCurrency: boolean;
  buyingRate: number | null;
  createdAt: Date;
  currencyExchanges?: Array<CurrencyExchange>;
  exchangeOffice?: ExchangeOffice | null;
  highestBuyingRate: string | null;
  highestSellingRate: number | null;
  id: string;
  iso: string;
  lowestBuyingRate: number | null;
  lowestSellingRate: number | null;
  Name: string;
  sellCurrency: boolean;
  sellingRate: number | null;
  updatedAt: Date;
};
