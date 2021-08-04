import { ArgsType, Field } from "@nestjs/graphql";
import { CurrencyCreateInput } from "./CurrencyCreateInput";

@ArgsType()
class CreateCurrencyArgs {
  @Field(() => CurrencyCreateInput, { nullable: false })
  data!: CurrencyCreateInput;
}

export { CreateCurrencyArgs };
