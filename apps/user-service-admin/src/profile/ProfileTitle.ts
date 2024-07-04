import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "fullName";

export const ProfileTitle = (record: TProfile): string => {
  return record.fullName?.toString() || String(record.id);
};
