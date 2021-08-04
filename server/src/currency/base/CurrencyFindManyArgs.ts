import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CurrencyWhereInput } from "./CurrencyWhereInput";
import { Type } from "class-transformer";
import { CurrencyOrderByInput } from "./CurrencyOrderByInput";

@ArgsType()
class CurrencyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CurrencyWhereInput,
  })
  @Field(() => CurrencyWhereInput, { nullable: true })
  @Type(() => CurrencyWhereInput)
  where?: CurrencyWhereInput;

  @ApiProperty({
    required: false,
    type: CurrencyOrderByInput,
  })
  @Field(() => CurrencyOrderByInput, { nullable: true })
  @Type(() => CurrencyOrderByInput)
  orderBy?: CurrencyOrderByInput;

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

export { CurrencyFindManyArgs };
