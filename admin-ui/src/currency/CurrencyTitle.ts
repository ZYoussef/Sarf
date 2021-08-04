import { Currency as TCurrency } from "../api/currency/Currency";

export const CURRENCY_TITLE_FIELD = "Name";

export const CurrencyTitle = (record: TCurrency) => {
  return record.Name;
};
