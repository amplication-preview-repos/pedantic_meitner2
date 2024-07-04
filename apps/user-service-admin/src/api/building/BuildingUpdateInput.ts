import { LiftUpdateManyWithoutBuildingsInput } from "./LiftUpdateManyWithoutBuildingsInput";

export type BuildingUpdateInput = {
  lifts?: LiftUpdateManyWithoutBuildingsInput;
  name?: string | null;
};
