import { ArgsType, Field } from "@nestjs/graphql";
import { CurrencyWhereUniqueInput } from "./CurrencyWhereUniqueInput";

@ArgsType()
class CurrencyFindUniqueArgs {
  @Field(() => CurrencyWhereUniqueInput, { nullable: false })
  where!: CurrencyWhereUniqueInput;
}

export { CurrencyFindUniqueArgs };
