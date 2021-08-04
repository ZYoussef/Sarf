import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsOptional,
  IsNumber,
  ValidateNested,
  IsString,
} from "class-validator";
import { ExchangeOfficeWhereUniqueInput } from "../../exchangeOffice/base/ExchangeOfficeWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class CurrencyUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  buyCurrency?: boolean;

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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  iso?: string;

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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  Name?: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  sellCurrency?: boolean;

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
export { CurrencyUpdateInput };
