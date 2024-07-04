import * as graphql from "@nestjs/graphql";
import { ScriptResultResolverBase } from "./base/scriptResult.resolver.base";
import { ScriptResult } from "./base/ScriptResult";
import { ScriptResultService } from "./scriptResult.service";

@graphql.Resolver(() => ScriptResult)
export class ScriptResultResolver extends ScriptResultResolverBase {
  constructor(protected readonly service: ScriptResultService) {
    super(service);
  }
}
