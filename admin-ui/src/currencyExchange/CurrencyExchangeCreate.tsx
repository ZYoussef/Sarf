import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ExchangeOfficeTitle } from "../exchangeOffice/ExchangeOfficeTitle";

export const CurrencyExchangeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="exchangeoffice.id"
          reference="ExchangeOffice"
          label="ID_office"
        >
          <SelectInput optionText={ExchangeOfficeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
