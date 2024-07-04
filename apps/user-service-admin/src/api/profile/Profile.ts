import { User } from "../user/User";

export type Profile = {
  address: string | null;
  createdAt: Date;
  fullName: string | null;
  id: string;
  mobileNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
