import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Currency } from "../../currency/base/Currency";
import { ExchangeOffice } from "../../exchangeOffice/base/ExchangeOffice";
@ObjectType()
class CurrencyExchange {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Currency],
  })
  @ValidateNested()
  @Type(() => Currency)
  @IsOptional()
  idCurrency?: Array<Currency>;

  @ApiProperty({
    required: false,
    type: () => [ExchangeOffice],
  })
  @ValidateNested()
  @Type(() => ExchangeOffice)
  @IsOptional()
  idOffice?: Array<ExchangeOffice>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { CurrencyExchange };
