import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LiftService } from "./lift.service";
import { LiftControllerBase } from "./base/lift.controller.base";

@swagger.ApiTags("lifts")
@common.Controller("lifts")
export class LiftController extends LiftControllerBase {
  constructor(protected readonly service: LiftService) {
    super(service);
  }
}
