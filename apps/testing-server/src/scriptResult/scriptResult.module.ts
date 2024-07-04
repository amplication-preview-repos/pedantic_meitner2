import { Module } from "@nestjs/common";
import { ScriptResultModuleBase } from "./base/scriptResult.module.base";
import { ScriptResultService } from "./scriptResult.service";
import { ScriptResultController } from "./scriptResult.controller";
import { ScriptResultResolver } from "./scriptResult.resolver";

@Module({
  imports: [ScriptResultModuleBase],
  controllers: [ScriptResultController],
  providers: [ScriptResultService, ScriptResultResolver],
  exports: [ScriptResultService],
})
export class ScriptResultModule {}
