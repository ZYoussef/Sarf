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
import { CreateExchangeOfficeArgs } from "./CreateExchangeOfficeArgs";
import { UpdateExchangeOfficeArgs } from "./UpdateExchangeOfficeArgs";
import { DeleteExchangeOfficeArgs } from "./DeleteExchangeOfficeArgs";
import { ExchangeOfficeFindManyArgs } from "./ExchangeOfficeFindManyArgs";
import { ExchangeOfficeFindUniqueArgs } from "./ExchangeOfficeFindUniqueArgs";
import { ExchangeOffice } from "./ExchangeOffice";
import { CurrencyFindManyArgs } from "../../currency/base/CurrencyFindManyArgs";
import { Currency } from "../../currency/base/Currency";
import { ExchangeOfficeService } from "../exchangeOffice.service";

@graphql.Resolver(() => ExchangeOffice)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class ExchangeOfficeResolverBase {
  constructor(
    protected readonly service: ExchangeOfficeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ExchangeOffice",
    action: "read",
    possession: "any",
  })
  async _exchangeOfficesMeta(
    @graphql.Args() args: ExchangeOfficeFindManyArgs
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

  @graphql.Query(() => [ExchangeOffice])
  @nestAccessControl.UseRoles({
    resource: "ExchangeOffice",
    action: "read",
    possession: "any",
  })
  async exchangeOffices(
    @graphql.Args() args: ExchangeOfficeFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ExchangeOffice[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ExchangeOffice",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => ExchangeOffice, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ExchangeOffice",
    action: "read",
    possession: "own",
  })
  async exchangeOffice(
    @graphql.Args() args: ExchangeOfficeFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ExchangeOffice | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ExchangeOffice",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => ExchangeOffice)
  @nestAccessControl.UseRoles({
    resource: "ExchangeOffice",
    action: "create",
    possession: "any",
  })
  async createExchangeOffice(
    @graphql.Args() args: CreateExchangeOfficeArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ExchangeOffice> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ExchangeOffice",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"ExchangeOffice"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ExchangeOffice)
  @nestAccessControl.UseRoles({
    resource: "ExchangeOffice",
    action: "update",
    possession: "any",
  })
  async updateExchangeOffice(
    @graphql.Args() args: UpdateExchangeOfficeArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ExchangeOffice | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ExchangeOffice",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"ExchangeOffice"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ExchangeOffice)
  @nestAccessControl.UseRoles({
    resource: "ExchangeOffice",
    action: "delete",
    possession: "any",
  })
  async deleteExchangeOffice(
    @graphql.Args() args: DeleteExchangeOfficeArgs
  ): Promise<ExchangeOffice | null> {
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
    resource: "ExchangeOffice",
    action: "read",
    possession: "any",
  })
  async currencies(
    @graphql.Parent() parent: ExchangeOffice,
    @graphql.Args() args: CurrencyFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Currency[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Currency",
    });
    const results = await this.service.findCurrencies(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
