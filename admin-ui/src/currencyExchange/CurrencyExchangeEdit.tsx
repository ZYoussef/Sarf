import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ExchangeOfficeTitle } from "../exchangeOffice/ExchangeOfficeTitle";

export const CurrencyExchangeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="exchangeoffice.id"
          reference="ExchangeOffice"
          label="ID_office"
        >
          <SelectInput optionText={ExchangeOfficeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
