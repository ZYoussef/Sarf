import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CurrencyExchangeResolverBase } from "./base/currencyExchange.resolver.base";
import { CurrencyExchange } from "./base/CurrencyExchange";
import { CurrencyExchangeService } from "./currencyExchange.service";

@graphql.Resolver(() => CurrencyExchange)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class CurrencyExchangeResolver extends CurrencyExchangeResolverBase {
  constructor(
    protected readonly service: CurrencyExchangeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
