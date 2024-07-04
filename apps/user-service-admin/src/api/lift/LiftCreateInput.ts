import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { RtspLinkCreateNestedManyWithoutLiftsInput } from "./RtspLinkCreateNestedManyWithoutLiftsInput";

export type LiftCreateInput = {
  building?: BuildingWhereUniqueInput | null;
  numberField?: number | null;
  rtspLinks?: RtspLinkCreateNestedManyWithoutLiftsInput;
};
