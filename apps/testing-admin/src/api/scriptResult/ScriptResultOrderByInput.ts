import { SortOrder } from "../../util/SortOrder";

export type ScriptResultOrderByInput = {
  createdAt?: SortOrder;
  executedAt?: SortOrder;
  id?: SortOrder;
  result?: SortOrder;
  scriptName?: SortOrder;
  updatedAt?: SortOrder;
};
