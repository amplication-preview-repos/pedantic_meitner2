import { Module } from "@nestjs/common";
import { LiftModuleBase } from "./base/lift.module.base";
import { LiftService } from "./lift.service";
import { LiftController } from "./lift.controller";
import { LiftResolver } from "./lift.resolver";

@Module({
  imports: [LiftModuleBase],
  controllers: [LiftController],
  providers: [LiftService, LiftResolver],
  exports: [LiftService],
})
export class LiftModule {}
