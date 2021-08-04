import { CurrencyExchange } from "../currencyExchange/CurrencyExchange";

export type Currency = {
  createdAt: Date;
  currencyExchanges?: Array<CurrencyExchange>;
  id: string;
  iso: string;
  Name: string;
  updatedAt: Date;
};
