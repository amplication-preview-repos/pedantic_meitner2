import { Module } from "@nestjs/common";
import { RtspLinkModuleBase } from "./base/rtspLink.module.base";
import { RtspLinkService } from "./rtspLink.service";
import { RtspLinkController } from "./rtspLink.controller";
import { RtspLinkResolver } from "./rtspLink.resolver";

@Module({
  imports: [RtspLinkModuleBase],
  controllers: [RtspLinkController],
  providers: [RtspLinkService, RtspLinkResolver],
  exports: [RtspLinkService],
})
export class RtspLinkModule {}
