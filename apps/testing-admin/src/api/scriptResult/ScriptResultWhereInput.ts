import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ScriptResultWhereInput = {
  executedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  result?: StringNullableFilter;
  scriptName?: StringNullableFilter;
};
