import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LiftServiceBase } from "./base/lift.service.base";

@Injectable()
export class LiftService extends LiftServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
