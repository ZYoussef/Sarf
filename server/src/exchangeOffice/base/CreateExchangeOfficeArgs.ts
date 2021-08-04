import { ArgsType, Field } from "@nestjs/graphql";
import { ExchangeOfficeCreateInput } from "./ExchangeOfficeCreateInput";

@ArgsType()
class CreateExchangeOfficeArgs {
  @Field(() => ExchangeOfficeCreateInput, { nullable: false })
  data!: ExchangeOfficeCreateInput;
}

export { CreateExchangeOfficeArgs };
