import { StringFilter } from "../../util/StringFilter";
import { LiftWhereUniqueInput } from "../lift/LiftWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RtspLinkWhereInput = {
  id?: StringFilter;
  lift?: LiftWhereUniqueInput;
  url?: StringNullableFilter;
};
