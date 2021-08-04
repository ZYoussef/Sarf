import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ExchangeOfficeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <TextInput label="ManagerName" source="managerName" />
        <TextInput label="Name" source="name" />
        <TextInput label="phoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
