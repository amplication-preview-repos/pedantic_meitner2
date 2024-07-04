import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ScriptResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="executedAt" source="executedAt" />
        <TextInput label="result" multiline source="result" />
        <TextInput label="scriptName" source="scriptName" />
      </SimpleForm>
    </Create>
  );
};
