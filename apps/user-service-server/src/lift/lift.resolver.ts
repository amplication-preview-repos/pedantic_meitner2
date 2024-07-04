import * as graphql from "@nestjs/graphql";
import { LiftResolverBase } from "./base/lift.resolver.base";
import { Lift } from "./base/Lift";
import { LiftService } from "./lift.service";

@graphql.Resolver(() => Lift)
export class LiftResolver extends LiftResolverBase {
  constructor(protected readonly service: LiftService) {
    super(service);
  }
}
