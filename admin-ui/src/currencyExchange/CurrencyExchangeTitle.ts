import { CurrencyExchange as TCurrencyExchange } from "../api/currencyExchange/CurrencyExchange";

export const CURRENCYEXCHANGE_TITLE_FIELD = "id";

export const CurrencyExchangeTitle = (record: TCurrencyExchange) => {
  return record.id;
};
