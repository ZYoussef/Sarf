import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ExchangeOfficeWhereUniqueInput } from "../../exchangeOffice/base/ExchangeOfficeWhereUniqueInput";
@InputType()
class CurrencyExchangeWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  idOffice?: ExchangeOfficeWhereUniqueInput;
}
export { CurrencyExchangeWhereInput };
