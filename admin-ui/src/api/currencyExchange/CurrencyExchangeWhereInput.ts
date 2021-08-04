import { StringFilter } from "../../util/StringFilter";
import { ExchangeOfficeWhereUniqueInput } from "../exchangeOffice/ExchangeOfficeWhereUniqueInput";

export type CurrencyExchangeWhereInput = {
  id?: StringFilter;
  idOffice?: ExchangeOfficeWhereUniqueInput;
};
