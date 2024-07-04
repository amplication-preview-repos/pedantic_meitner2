/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { RtspLink } from "./RtspLink";
import { RtspLinkCountArgs } from "./RtspLinkCountArgs";
import { RtspLinkFindManyArgs } from "./RtspLinkFindManyArgs";
import { RtspLinkFindUniqueArgs } from "./RtspLinkFindUniqueArgs";
import { CreateRtspLinkArgs } from "./CreateRtspLinkArgs";
import { UpdateRtspLinkArgs } from "./UpdateRtspLinkArgs";
import { DeleteRtspLinkArgs } from "./DeleteRtspLinkArgs";
import { Lift } from "../../lift/base/Lift";
import { RtspLinkService } from "../rtspLink.service";
@graphql.Resolver(() => RtspLink)
export class RtspLinkResolverBase {
  constructor(protected readonly service: RtspLinkService) {}

  async _rtspLinksMeta(
    @graphql.Args() args: RtspLinkCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [RtspLink])
  async rtspLinks(
    @graphql.Args() args: RtspLinkFindManyArgs
  ): Promise<RtspLink[]> {
    return this.service.rtspLinks(args);
  }

  @graphql.Query(() => RtspLink, { nullable: true })
  async rtspLink(
    @graphql.Args() args: RtspLinkFindUniqueArgs
  ): Promise<RtspLink | null> {
    const result = await this.service.rtspLink(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => RtspLink)
  async createRtspLink(
    @graphql.Args() args: CreateRtspLinkArgs
  ): Promise<RtspLink> {
    return await this.service.createRtspLink({
      ...args,
      data: {
        ...args.data,

        lift: args.data.lift
          ? {
              connect: args.data.lift,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => RtspLink)
  async updateRtspLink(
    @graphql.Args() args: UpdateRtspLinkArgs
  ): Promise<RtspLink | null> {
    try {
      return await this.service.updateRtspLink({
        ...args,
        data: {
          ...args.data,

          lift: args.data.lift
            ? {
                connect: args.data.lift,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => RtspLink)
  async deleteRtspLink(
    @graphql.Args() args: DeleteRtspLinkArgs
  ): Promise<RtspLink | null> {
    try {
      return await this.service.deleteRtspLink(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Lift, {
    nullable: true,
    name: "lift",
  })
  async getLift(@graphql.Parent() parent: RtspLink): Promise<Lift | null> {
    const result = await this.service.getLift(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
