import { Lift as TLift } from "../api/lift/Lift";

export const LIFT_TITLE_FIELD = "id";

export const LiftTitle = (record: TLift): string => {
  return record.id?.toString() || String(record.id);
};
