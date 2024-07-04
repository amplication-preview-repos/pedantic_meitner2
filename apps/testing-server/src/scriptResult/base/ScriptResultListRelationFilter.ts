/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ScriptResultWhereInput } from "./ScriptResultWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ScriptResultListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ScriptResultWhereInput,
  })
  @ValidateNested()
  @Type(() => ScriptResultWhereInput)
  @IsOptional()
  @Field(() => ScriptResultWhereInput, {
    nullable: true,
  })
  every?: ScriptResultWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScriptResultWhereInput,
  })
  @ValidateNested()
  @Type(() => ScriptResultWhereInput)
  @IsOptional()
  @Field(() => ScriptResultWhereInput, {
    nullable: true,
  })
  some?: ScriptResultWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScriptResultWhereInput,
  })
  @ValidateNested()
  @Type(() => ScriptResultWhereInput)
  @IsOptional()
  @Field(() => ScriptResultWhereInput, {
    nullable: true,
  })
  none?: ScriptResultWhereInput;
}
export { ScriptResultListRelationFilter as ScriptResultListRelationFilter };
