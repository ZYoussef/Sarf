import { CurrencyWhereInput } from "./CurrencyWhereInput";
import { CurrencyOrderByInput } from "./CurrencyOrderByInput";

export type CurrencyFindManyArgs = {
  where?: CurrencyWhereInput;
  orderBy?: CurrencyOrderByInput;
  skip?: number;
  take?: number;
};
