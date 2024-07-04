import { Injectable } from "@nestjs/common";
import { RtspToEc2Input } from "../rtspIntegration/RtspToEc2Input";
import { RtspToEc2Output } from "../rtspIntegration/RtspToEc2Output";

@Injectable()
export class RtspIntegrationService {
  constructor() {}
  async SendRtspToEc2(args: RtspToEc2Input): Promise<RtspToEc2Output> {
    throw new Error("Not implemented");
  }
}
