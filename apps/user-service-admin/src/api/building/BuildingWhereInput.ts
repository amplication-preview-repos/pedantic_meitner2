import { StringFilter } from "../../util/StringFilter";
import { LiftListRelationFilter } from "../lift/LiftListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BuildingWhereInput = {
  id?: StringFilter;
  lifts?: LiftListRelationFilter;
  name?: StringNullableFilter;
};
