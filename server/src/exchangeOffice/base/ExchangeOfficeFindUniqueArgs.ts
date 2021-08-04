import { ArgsType, Field } from "@nestjs/graphql";
import { ExchangeOfficeWhereUniqueInput } from "./ExchangeOfficeWhereUniqueInput";

@ArgsType()
class ExchangeOfficeFindUniqueArgs {
  @Field(() => ExchangeOfficeWhereUniqueInput, { nullable: false })
  where!: ExchangeOfficeWhereUniqueInput;
}

export { ExchangeOfficeFindUniqueArgs };
