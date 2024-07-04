import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RtspIntegrationService } from "./rtspintegration.service";
import { RtspToEc2Input } from "../rtspIntegration/RtspToEc2Input";
import { RtspToEc2Output } from "../rtspIntegration/RtspToEc2Output";

@swagger.ApiTags("rtspIntegrations")
@common.Controller("rtspIntegrations")
export class RtspIntegrationController {
  constructor(protected readonly service: RtspIntegrationService) {}

  @common.Post("/sendRTSPToEC2")
  @swagger.ApiOkResponse({
    type: RtspToEc2Output
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendRtspToEc2(
    @common.Body()
    body: RtspToEc2Input
  ): Promise<RtspToEc2Output> {
        return this.service.SendRtspToEc2(body);
      }
}
