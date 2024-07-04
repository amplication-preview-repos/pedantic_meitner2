import { LiftCreateNestedManyWithoutBuildingsInput } from "./LiftCreateNestedManyWithoutBuildingsInput";

export type BuildingCreateInput = {
  lifts?: LiftCreateNestedManyWithoutBuildingsInput;
  name?: string | null;
};
