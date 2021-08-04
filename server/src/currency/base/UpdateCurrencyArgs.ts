import { ArgsType, Field } from "@nestjs/graphql";
import { CurrencyWhereUniqueInput } from "./CurrencyWhereUniqueInput";
import { CurrencyUpdateInput } from "./CurrencyUpdateInput";

@ArgsType()
class UpdateCurrencyArgs {
  @Field(() => CurrencyWhereUniqueInput, { nullable: false })
  where!: CurrencyWhereUniqueInput;
  @Field(() => CurrencyUpdateInput, { nullable: false })
  data!: CurrencyUpdateInput;
}

export { UpdateCurrencyArgs };
