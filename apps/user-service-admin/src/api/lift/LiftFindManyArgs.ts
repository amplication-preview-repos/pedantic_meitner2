import { LiftWhereInput } from "./LiftWhereInput";
import { LiftOrderByInput } from "./LiftOrderByInput";

export type LiftFindManyArgs = {
  where?: LiftWhereInput;
  orderBy?: Array<LiftOrderByInput>;
  skip?: number;
  take?: number;
};
