import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class RtspToEc2Input {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    rtspLink!: string;

    @Field(() => GraphQLJSON)
    otherInfo!: InputJsonValue;
}

export { RtspToEc2Input as RtspToEc2Input };