import { ArgsType, Field } from "@nestjs/graphql";
import { CurrencyExchangeWhereUniqueInput } from "./CurrencyExchangeWhereUniqueInput";

@ArgsType()
class CurrencyExchangeFindUniqueArgs {
  @Field(() => CurrencyExchangeWhereUniqueInput, { nullable: false })
  where!: CurrencyExchangeWhereUniqueInput;
}

export { CurrencyExchangeFindUniqueArgs };
