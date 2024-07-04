import { RtspLinkWhereInput } from "./RtspLinkWhereInput";
import { RtspLinkOrderByInput } from "./RtspLinkOrderByInput";

export type RtspLinkFindManyArgs = {
  where?: RtspLinkWhereInput;
  orderBy?: Array<RtspLinkOrderByInput>;
  skip?: number;
  take?: number;
};
