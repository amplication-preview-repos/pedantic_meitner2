import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  mobileNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
