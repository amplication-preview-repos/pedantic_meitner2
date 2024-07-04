import { Lift } from "../lift/Lift";

export type RtspLink = {
  createdAt: Date;
  id: string;
  lift?: Lift | null;
  updatedAt: Date;
  url: string | null;
};
