import * as graphql from "@nestjs/graphql";
import { RtspLinkResolverBase } from "./base/rtspLink.resolver.base";
import { RtspLink } from "./base/RtspLink";
import { RtspLinkService } from "./rtspLink.service";

@graphql.Resolver(() => RtspLink)
export class RtspLinkResolver extends RtspLinkResolverBase {
  constructor(protected readonly service: RtspLinkService) {
    super(service);
  }
}
