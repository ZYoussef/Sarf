import { ArgsType, Field } from "@nestjs/graphql";
import { CurrencyExchangeWhereUniqueInput } from "./CurrencyExchangeWhereUniqueInput";

@ArgsType()
class DeleteCurrencyExchangeArgs {
  @Field(() => CurrencyExchangeWhereUniqueInput, { nullable: false })
  where!: CurrencyExchangeWhereUniqueInput;
}

export { DeleteCurrencyExchangeArgs };
