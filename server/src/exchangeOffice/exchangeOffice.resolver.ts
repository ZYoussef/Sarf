import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ExchangeOfficeResolverBase } from "./base/exchangeOffice.resolver.base";
import { ExchangeOffice } from "./base/ExchangeOffice";
import { ExchangeOfficeService } from "./exchangeOffice.service";

@graphql.Resolver(() => ExchangeOffice)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class ExchangeOfficeResolver extends ExchangeOfficeResolverBase {
  constructor(
    protected readonly service: ExchangeOfficeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
