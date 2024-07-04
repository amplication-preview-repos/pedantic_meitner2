import { Lift } from "../lift/Lift";

export type Building = {
  createdAt: Date;
  id: string;
  lifts?: Array<Lift>;
  name: string | null;
  updatedAt: Date;
};
