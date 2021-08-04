import { SortOrder } from "../../util/SortOrder";

export type CurrencyOrderByInput = {
  buyCurrency?: SortOrder;
  buyingRate?: SortOrder;
  createdAt?: SortOrder;
  exchangeOfficeId?: SortOrder;
  highestBuyingRate?: SortOrder;
  highestSellingRate?: SortOrder;
  id?: SortOrder;
  iso?: SortOrder;
  lowestBuyingRate?: SortOrder;
  lowestSellingRate?: SortOrder;
  Name?: SortOrder;
  sellCurrency?: SortOrder;
  sellingRate?: SortOrder;
  updatedAt?: SortOrder;
};
