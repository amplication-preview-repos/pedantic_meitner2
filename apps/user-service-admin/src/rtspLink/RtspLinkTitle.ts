import { RtspLink as TRtspLink } from "../api/rtspLink/RtspLink";

export const RTSPLINK_TITLE_FIELD = "url";

export const RtspLinkTitle = (record: TRtspLink): string => {
  return record.url?.toString() || String(record.id);
};
