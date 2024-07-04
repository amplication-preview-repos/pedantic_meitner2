import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScriptResultServiceBase } from "./base/scriptResult.service.base";

@Injectable()
export class ScriptResultService extends ScriptResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
