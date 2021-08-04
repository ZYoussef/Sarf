import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ExchangeOfficeTitle } from "../exchangeOffice/ExchangeOfficeTitle";

export const CurrencyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Buy currency" source="buyCurrency" />
        <NumberInput label="Buying rate" source="buyingRate" />
        <ReferenceInput
          source="exchangeoffice.id"
          reference="ExchangeOffice"
          label="Exchange_Office"
        >
          <SelectInput optionText={ExchangeOfficeTitle} />
        </ReferenceInput>
        <TextInput label="Highest buying rate" source="highestBuyingRate" />
        <NumberInput label="Highest selling rate" source="highestSellingRate" />
        <TextInput label="iso" source="iso" />
        <NumberInput label="Lowest buying rate" source="lowestBuyingRate" />
        <NumberInput label="Lowest selling rate" source="lowestSellingRate" />
        <TextInput label="name" source="Name" />
        <BooleanInput label="Sell currency" source="sellCurrency" />
        <NumberInput label="Selling rate " source="sellingRate" />
      </SimpleForm>
    </Create>
  );
};
