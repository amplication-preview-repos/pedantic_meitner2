import * as graphql from "@nestjs/graphql";
import { RtspToEc2Input } from "../rtspIntegration/RtspToEc2Input";
import { RtspToEc2Output } from "../rtspIntegration/RtspToEc2Output";
import { RtspIntegrationService } from "./rtspintegration.service";

export class RtspIntegrationResolver {
  constructor(protected readonly service: RtspIntegrationService) {}

  @graphql.Mutation(() => RtspToEc2Output)
  async SendRtspToEc2(
    @graphql.Args()
    args: RtspToEc2Input
  ): Promise<RtspToEc2Output> {
    return this.service.SendRtspToEc2(args);
  }
}
