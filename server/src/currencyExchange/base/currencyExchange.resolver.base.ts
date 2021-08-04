import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteCurrencyExchangeArgs } from "./DeleteCurrencyExchangeArgs";
import { CurrencyExchangeFindManyArgs } from "./CurrencyExchangeFindManyArgs";
import { CurrencyExchangeFindUniqueArgs } from "./CurrencyExchangeFindUniqueArgs";
import { CurrencyExchange } from "./CurrencyExchange";
import { CurrencyFindManyArgs } from "../../currency/base/CurrencyFindManyArgs";
import { Currency } from "../../currency/base/Currency";
import { ExchangeOfficeFindManyArgs } from "../../exchangeOffice/base/ExchangeOfficeFindManyArgs";
import { ExchangeOffice } from "../../exchangeOffice/base/ExchangeOffice";
import { CurrencyExchangeService } from "../currencyExchange.service";

@graphql.Resolver(() => CurrencyExchange)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class CurrencyExchangeResolverBase {
  constructor(
    protected readonly service: CurrencyExchangeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CurrencyExchange",
    action: "read",
    possession: "any",
  })
  async _currencyExchangesMeta(
    @graphql.Args() args: CurrencyExchangeFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [CurrencyExchange])
  @nestAccessControl.UseRoles({
    resource: "CurrencyExchange",
    action: "read",
    possession: "any",
  })
  async currencyExchanges(
    @graphql.Args() args: CurrencyExchangeFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CurrencyExchange[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CurrencyExchange",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => CurrencyExchange, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CurrencyExchange",
    action: "read",
    possession: "own",
  })
  async currencyExchange(
    @graphql.Args() args: CurrencyExchangeFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CurrencyExchange | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "CurrencyExchange",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => CurrencyExchange)
  @nestAccessControl.UseRoles({
    resource: "CurrencyExchange",
    action: "delete",
    possession: "any",
  })
  async deleteCurrencyExchange(
    @graphql.Args() args: DeleteCurrencyExchangeArgs
  ): Promise<CurrencyExchange | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Currency])
  @nestAccessControl.UseRoles({
    resource: "CurrencyExchange",
    action: "read",
    possession: "any",
  })
  async idCurrency(
    @graphql.Parent() parent: CurrencyExchange,
    @graphql.Args() args: CurrencyFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Currency[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Currency",
    });
    const results = await this.service.findIdCurrency(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [ExchangeOffice])
  @nestAccessControl.UseRoles({
    resource: "CurrencyExchange",
    action: "read",
    possession: "any",
  })
  async idOffice(
    @graphql.Parent() parent: CurrencyExchange,
    @graphql.Args() args: ExchangeOfficeFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ExchangeOffice[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ExchangeOffice",
    });
    const results = await this.service.findIdOffice(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
