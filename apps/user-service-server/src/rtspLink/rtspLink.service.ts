import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RtspLinkServiceBase } from "./base/rtspLink.service.base";

@Injectable()
export class RtspLinkService extends RtspLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
