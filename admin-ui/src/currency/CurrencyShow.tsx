import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";

import { EXCHANGEOFFICE_TITLE_FIELD } from "../exchangeOffice/ExchangeOfficeTitle";

export const CurrencyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Buy currency" source="buyCurrency" />
        <TextField label="Buying rate" source="buyingRate" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Exchange_Office"
          source="exchangeoffice.id"
          reference="ExchangeOffice"
        >
          <TextField source={EXCHANGEOFFICE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Highest buying rate" source="highestBuyingRate" />
        <TextField label="Highest selling rate" source="highestSellingRate" />
        <TextField label="ID" source="id" />
        <TextField label="iso" source="iso" />
        <TextField label="Lowest buying rate" source="lowestBuyingRate" />
        <TextField label="Lowest selling rate" source="lowestSellingRate" />
        <TextField label="name" source="Name" />
        <BooleanField label="Sell currency" source="sellCurrency" />
        <TextField label="Selling rate " source="sellingRate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
