import { Building } from "../building/Building";
import { RtspLink } from "../rtspLink/RtspLink";

export type Lift = {
  building?: Building | null;
  createdAt: Date;
  id: string;
  numberField: number | null;
  rtspLinks?: Array<RtspLink>;
  updatedAt: Date;
};
