import { LiftWhereUniqueInput } from "../lift/LiftWhereUniqueInput";

export type RtspLinkCreateInput = {
  lift?: LiftWhereUniqueInput | null;
  url?: string | null;
};
