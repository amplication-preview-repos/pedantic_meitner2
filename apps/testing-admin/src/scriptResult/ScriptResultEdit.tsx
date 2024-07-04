import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ScriptResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="executedAt" source="executedAt" />
        <TextInput label="result" multiline source="result" />
        <TextInput label="scriptName" source="scriptName" />
      </SimpleForm>
    </Edit>
  );
};
