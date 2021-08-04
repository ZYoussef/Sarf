import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExchangeOfficeWhereUniqueInput } from "../../exchangeOffice/base/ExchangeOfficeWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class CurrencyExchangeUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ExchangeOfficeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExchangeOfficeWhereUniqueInput)
  @IsOptional()
  @Field(() => ExchangeOfficeWhereUniqueInput, {
    nullable: true,
  })
  idOffice?: ExchangeOfficeWhereUniqueInput | null;
}
export { CurrencyExchangeUpdateInput };
