import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  ValidateNested,
  IsString,
} from "class-validator";
import { ExchangeOfficeWhereUniqueInput } from "../../exchangeOffice/base/ExchangeOfficeWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class CurrencyCreateInput {
  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  buyCurrency!: boolean;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  buyingRate?: number | null;

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
  exchangeOffice?: ExchangeOfficeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  highestBuyingRate?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  highestSellingRate?: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  iso!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  lowestBuyingRate?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  lowestSellingRate?: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  Name!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  sellCurrency!: boolean;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  sellingRate?: number | null;
}
export { CurrencyCreateInput };
