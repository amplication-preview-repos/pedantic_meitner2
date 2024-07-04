import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  address?: string | null;
  fullName?: string | null;
  mobileNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
