/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ScriptResultService } from "../scriptResult.service";
import { ScriptResultCreateInput } from "./ScriptResultCreateInput";
import { ScriptResult } from "./ScriptResult";
import { ScriptResultFindManyArgs } from "./ScriptResultFindManyArgs";
import { ScriptResultWhereUniqueInput } from "./ScriptResultWhereUniqueInput";
import { ScriptResultUpdateInput } from "./ScriptResultUpdateInput";

export class ScriptResultControllerBase {
  constructor(protected readonly service: ScriptResultService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ScriptResult })
  async createScriptResult(
    @common.Body() data: ScriptResultCreateInput
  ): Promise<ScriptResult> {
    return await this.service.createScriptResult({
      data: data,
      select: {
        createdAt: true,
        executedAt: true,
        id: true,
        result: true,
        scriptName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ScriptResult] })
  @ApiNestedQuery(ScriptResultFindManyArgs)
  async scriptResults(@common.Req() request: Request): Promise<ScriptResult[]> {
    const args = plainToClass(ScriptResultFindManyArgs, request.query);
    return this.service.scriptResults({
      ...args,
      select: {
        createdAt: true,
        executedAt: true,
        id: true,
        result: true,
        scriptName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ScriptResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async scriptResult(
    @common.Param() params: ScriptResultWhereUniqueInput
  ): Promise<ScriptResult | null> {
    const result = await this.service.scriptResult({
      where: params,
      select: {
        createdAt: true,
        executedAt: true,
        id: true,
        result: true,
        scriptName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ScriptResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateScriptResult(
    @common.Param() params: ScriptResultWhereUniqueInput,
    @common.Body() data: ScriptResultUpdateInput
  ): Promise<ScriptResult | null> {
    try {
      return await this.service.updateScriptResult({
        where: params,
        data: data,
        select: {
          createdAt: true,
          executedAt: true,
          id: true,
          result: true,
          scriptName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ScriptResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteScriptResult(
    @common.Param() params: ScriptResultWhereUniqueInput
  ): Promise<ScriptResult | null> {
    try {
      return await this.service.deleteScriptResult({
        where: params,
        select: {
          createdAt: true,
          executedAt: true,
          id: true,
          result: true,
          scriptName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
