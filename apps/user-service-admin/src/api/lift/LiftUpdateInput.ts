import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { RtspLinkUpdateManyWithoutLiftsInput } from "./RtspLinkUpdateManyWithoutLiftsInput";

export type LiftUpdateInput = {
  building?: BuildingWhereUniqueInput | null;
  numberField?: number | null;
  rtspLinks?: RtspLinkUpdateManyWithoutLiftsInput;
};
