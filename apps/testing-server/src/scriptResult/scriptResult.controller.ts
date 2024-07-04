import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScriptResultService } from "./scriptResult.service";
import { ScriptResultControllerBase } from "./base/scriptResult.controller.base";

@swagger.ApiTags("scriptResults")
@common.Controller("scriptResults")
export class ScriptResultController extends ScriptResultControllerBase {
  constructor(protected readonly service: ScriptResultService) {
    super(service);
  }
}
