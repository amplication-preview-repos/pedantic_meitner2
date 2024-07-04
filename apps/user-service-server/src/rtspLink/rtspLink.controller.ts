import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RtspLinkService } from "./rtspLink.service";
import { RtspLinkControllerBase } from "./base/rtspLink.controller.base";

@swagger.ApiTags("rtspLinks")
@common.Controller("rtspLinks")
export class RtspLinkController extends RtspLinkControllerBase {
  constructor(protected readonly service: RtspLinkService) {
    super(service);
  }
}
