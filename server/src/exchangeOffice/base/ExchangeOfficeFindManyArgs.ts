import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExchangeOfficeWhereInput } from "./ExchangeOfficeWhereInput";
import { Type } from "class-transformer";
import { ExchangeOfficeOrderByInput } from "./ExchangeOfficeOrderByInput";

@ArgsType()
class ExchangeOfficeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ExchangeOfficeWhereInput,
  })
  @Field(() => ExchangeOfficeWhereInput, { nullable: true })
  @Type(() => ExchangeOfficeWhereInput)
  where?: ExchangeOfficeWhereInput;

  @ApiProperty({
    required: false,
    type: ExchangeOfficeOrderByInput,
  })
  @Field(() => ExchangeOfficeOrderByInput, { nullable: true })
  @Type(() => ExchangeOfficeOrderByInput)
  orderBy?: ExchangeOfficeOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ExchangeOfficeFindManyArgs };
