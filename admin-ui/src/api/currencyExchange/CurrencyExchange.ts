import { Currency } from "../currency/Currency";

export type CurrencyExchange = {
  createdAt: Date;
  currency?: Array<Currency>;
  id: string;
  updatedAt: Date;
};
