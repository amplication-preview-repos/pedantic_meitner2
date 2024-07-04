import { Module } from "@nestjs/common";
import { RtspIntegrationService } from "./rtspintegration.service";
import { RtspIntegrationController } from "./rtspintegration.controller";
import { RtspIntegrationResolver } from "./rtspintegration.resolver";

@Module({
  controllers: [RtspIntegrationController],
  providers: [RtspIntegrationService, RtspIntegrationResolver],
  exports: [RtspIntegrationService],
})
export class RtspIntegrationModule {}
