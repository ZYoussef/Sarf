import { ArgsType, Field } from "@nestjs/graphql";
import { ExchangeOfficeWhereUniqueInput } from "./ExchangeOfficeWhereUniqueInput";
import { ExchangeOfficeUpdateInput } from "./ExchangeOfficeUpdateInput";

@ArgsType()
class UpdateExchangeOfficeArgs {
  @Field(() => ExchangeOfficeWhereUniqueInput, { nullable: false })
  where!: ExchangeOfficeWhereUniqueInput;
  @Field(() => ExchangeOfficeUpdateInput, { nullable: false })
  data!: ExchangeOfficeUpdateInput;
}

export { UpdateExchangeOfficeArgs };
