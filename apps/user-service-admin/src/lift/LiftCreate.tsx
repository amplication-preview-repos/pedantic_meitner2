import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BuildingTitle } from "../building/BuildingTitle";
import { RtspLinkTitle } from "../rtspLink/RtspLinkTitle";

export const LiftCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="building.id"
          reference="Building"
          label="Building"
        >
          <SelectInput optionText={BuildingTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="number" source="numberField" />
        <ReferenceArrayInput
          source="rtspLinks"
          reference="RtspLink"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RtspLinkTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
