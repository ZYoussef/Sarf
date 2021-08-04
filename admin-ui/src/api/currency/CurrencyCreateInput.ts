import { ExchangeOfficeWhereUniqueInput } from "../exchangeOffice/ExchangeOfficeWhereUniqueInput";

export type CurrencyCreateInput = {
  buyCurrency: boolean;
  buyingRate?: number | null;
  exchangeOffice?: ExchangeOfficeWhereUniqueInput | null;
  highestBuyingRate?: string | null;
  highestSellingRate?: number | null;
  iso: string;
  lowestBuyingRate?: number | null;
  lowestSellingRate?: number | null;
  Name: string;
  sellCurrency: boolean;
  sellingRate?: number | null;
};
