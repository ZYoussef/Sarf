import { ArgsType, Field } from "@nestjs/graphql";
import { CurrencyExchangeCreateInput } from "./CurrencyExchangeCreateInput";

@ArgsType()
class CreateCurrencyExchangeArgs {
  @Field(() => CurrencyExchangeCreateInput, { nullable: false })
  data!: CurrencyExchangeCreateInput;
}

export { CreateCurrencyExchangeArgs };
