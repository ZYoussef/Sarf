import { ArgsType, Field } from "@nestjs/graphql";
import { ExchangeOfficeWhereUniqueInput } from "./ExchangeOfficeWhereUniqueInput";

@ArgsType()
class DeleteExchangeOfficeArgs {
  @Field(() => ExchangeOfficeWhereUniqueInput, { nullable: false })
  where!: ExchangeOfficeWhereUniqueInput;
}

export { DeleteExchangeOfficeArgs };
