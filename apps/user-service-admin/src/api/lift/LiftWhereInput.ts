import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RtspLinkListRelationFilter } from "../rtspLink/RtspLinkListRelationFilter";

export type LiftWhereInput = {
  building?: BuildingWhereUniqueInput;
  id?: StringFilter;
  numberField?: IntNullableFilter;
  rtspLinks?: RtspLinkListRelationFilter;
};
