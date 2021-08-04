import { BooleanFilter } from "../../util/BooleanFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ExchangeOfficeWhereUniqueInput } from "../exchangeOffice/ExchangeOfficeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CurrencyWhereInput = {
  buyCurrency?: BooleanFilter;
  buyingRate?: FloatNullableFilter;
  exchangeOffice?: ExchangeOfficeWhereUniqueInput;
  highestBuyingRate?: StringNullableFilter;
  highestSellingRate?: FloatNullableFilter;
  id?: StringFilter;
  iso?: StringFilter;
  lowestBuyingRate?: FloatNullableFilter;
  lowestSellingRate?: FloatNullableFilter;
  Name?: StringFilter;
  sellCurrency?: BooleanFilter;
  sellingRate?: FloatNullableFilter;
};
