export type ScriptResult = {
  createdAt: Date;
  executedAt: Date | null;
  id: string;
  result: string | null;
  scriptName: string | null;
  updatedAt: Date;
};
