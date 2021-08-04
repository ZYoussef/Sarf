import { Currency } from "../currency/Currency";
import { ExchangeOffice } from "../exchangeOffice/ExchangeOffice";

export type CurrencyExchange = {
  createdAt: Date;
  id: string;
  idCurrency?: Array<Currency>;
  idOffice?: Array<ExchangeOffice>;
  updatedAt: Date;
};
