import { ScriptResult as TScriptResult } from "../api/scriptResult/ScriptResult";

export const SCRIPTRESULT_TITLE_FIELD = "scriptName";

export const ScriptResultTitle = (record: TScriptResult): string => {
  return record.scriptName?.toString() || String(record.id);
};
