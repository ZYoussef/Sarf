import { ArgsType, Field } from "@nestjs/graphql";
import { CurrencyWhereUniqueInput } from "./CurrencyWhereUniqueInput";

@ArgsType()
class DeleteCurrencyArgs {
  @Field(() => CurrencyWhereUniqueInput, { nullable: false })
  where!: CurrencyWhereUniqueInput;
}

export { DeleteCurrencyArgs };
