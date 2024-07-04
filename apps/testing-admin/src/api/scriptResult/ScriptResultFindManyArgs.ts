import { ScriptResultWhereInput } from "./ScriptResultWhereInput";
import { ScriptResultOrderByInput } from "./ScriptResultOrderByInput";

export type ScriptResultFindManyArgs = {
  where?: ScriptResultWhereInput;
  orderBy?: Array<ScriptResultOrderByInput>;
  skip?: number;
  take?: number;
};
