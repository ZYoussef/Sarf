import { CurrencyExchange } from "../currencyExchange/CurrencyExchange";

export type ExchangeOffice = {
  address: string;
  createdAt: Date;
  currencyExchanges?: Array<CurrencyExchange>;
  id: string;
  managerName: string | null;
  name: string;
  phoneNumber: string | null;
  updatedAt: Date;
};
