import { ArgsType, Field } from "@nestjs/graphql";
import { CurrencyExchangeWhereUniqueInput } from "./CurrencyExchangeWhereUniqueInput";
import { CurrencyExchangeUpdateInput } from "./CurrencyExchangeUpdateInput";

@ArgsType()
class UpdateCurrencyExchangeArgs {
  @Field(() => CurrencyExchangeWhereUniqueInput, { nullable: false })
  where!: CurrencyExchangeWhereUniqueInput;
  @Field(() => CurrencyExchangeUpdateInput, { nullable: false })
  data!: CurrencyExchangeUpdateInput;
}

export { UpdateCurrencyExchangeArgs };
