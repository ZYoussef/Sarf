import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CurrencyExchangeWhereInput } from "./CurrencyExchangeWhereInput";
import { Type } from "class-transformer";
import { CurrencyExchangeOrderByInput } from "./CurrencyExchangeOrderByInput";

@ArgsType()
class CurrencyExchangeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CurrencyExchangeWhereInput,
  })
  @Field(() => CurrencyExchangeWhereInput, { nullable: true })
  @Type(() => CurrencyExchangeWhereInput)
  where?: CurrencyExchangeWhereInput;

  @ApiProperty({
    required: false,
    type: CurrencyExchangeOrderByInput,
  })
  @Field(() => CurrencyExchangeOrderByInput, { nullable: true })
  @Type(() => CurrencyExchangeOrderByInput)
  orderBy?: CurrencyExchangeOrderByInput;

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

export { CurrencyExchangeFindManyArgs };
