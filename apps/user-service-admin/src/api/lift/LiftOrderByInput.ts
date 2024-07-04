import { SortOrder } from "../../util/SortOrder";

export type LiftOrderByInput = {
  buildingId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  numberField?: SortOrder;
  updatedAt?: SortOrder;
};
