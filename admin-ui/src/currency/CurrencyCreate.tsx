import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CurrencyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ISO" source="iso" />
        <TextInput label="Name" source="Name" />
      </SimpleForm>
    </Create>
  );
};
