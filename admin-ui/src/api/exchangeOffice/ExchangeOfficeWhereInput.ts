import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ExchangeOfficeWhereInput = {
  address?: StringFilter;
  id?: StringFilter;
  managerName?: StringNullableFilter;
  name?: StringFilter;
  phoneNumber?: StringNullableFilter;
};
