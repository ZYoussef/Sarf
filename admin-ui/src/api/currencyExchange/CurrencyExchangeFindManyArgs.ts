import { CurrencyExchangeWhereInput } from "./CurrencyExchangeWhereInput";
import { CurrencyExchangeOrderByInput } from "./CurrencyExchangeOrderByInput";

export type CurrencyExchangeFindManyArgs = {
  where?: CurrencyExchangeWhereInput;
  orderBy?: CurrencyExchangeOrderByInput;
  skip?: number;
  take?: number;
};
