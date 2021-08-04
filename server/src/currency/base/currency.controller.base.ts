import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as basicAuthGuard from "../../auth/basicAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { CurrencyService } from "../currency.service";
import { CurrencyCreateInput } from "./CurrencyCreateInput";
import { CurrencyWhereInput } from "./CurrencyWhereInput";
import { CurrencyWhereUniqueInput } from "./CurrencyWhereUniqueInput";
import { CurrencyFindManyArgs } from "./CurrencyFindManyArgs";
import { CurrencyUpdateInput } from "./CurrencyUpdateInput";
import { Currency } from "./Currency";
import { CurrencyExchangeWhereInput } from "../../currencyExchange/base/CurrencyExchangeWhereInput";
import { CurrencyExchange } from "../../currencyExchange/base/CurrencyExchange";

export class CurrencyControllerBase {
  constructor(
    protected readonly service: CurrencyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Currency })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: CurrencyCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Currency> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Currency",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Currency"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        exchangeOffice: data.exchangeOffice
          ? {
              connect: data.exchangeOffice,
            }
          : undefined,
      },
      select: {
        buyCurrency: true,
        buyingRate: true,
        createdAt: true,

        exchangeOffice: {
          select: {
            id: true,
          },
        },

        highestBuyingRate: true,
        highestSellingRate: true,
        id: true,
        iso: true,
        lowestBuyingRate: true,
        lowestSellingRate: true,
        Name: true,
        sellCurrency: true,
        sellingRate: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Currency] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => CurrencyFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Currency[]> {
    const args = plainToClass(CurrencyFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Currency",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        buyCurrency: true,
        buyingRate: true,
        createdAt: true,

        exchangeOffice: {
          select: {
            id: true,
          },
        },

        highestBuyingRate: true,
        highestSellingRate: true,
        id: true,
        iso: true,
        lowestBuyingRate: true,
        lowestSellingRate: true,
        Name: true,
        sellCurrency: true,
        sellingRate: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: CurrencyWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Currency | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Currency",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        buyCurrency: true,
        buyingRate: true,
        createdAt: true,

        exchangeOffice: {
          select: {
            id: true,
          },
        },

        highestBuyingRate: true,
        highestSellingRate: true,
        id: true,
        iso: true,
        lowestBuyingRate: true,
        lowestSellingRate: true,
        Name: true,
        sellCurrency: true,
        sellingRate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body()
    data: CurrencyUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Currency | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Currency",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Currency"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          exchangeOffice: data.exchangeOffice
            ? {
                connect: data.exchangeOffice,
              }
            : undefined,
        },
        select: {
          buyCurrency: true,
          buyingRate: true,
          createdAt: true,

          exchangeOffice: {
            select: {
              id: true,
            },
          },

          highestBuyingRate: true,
          highestSellingRate: true,
          id: true,
          iso: true,
          lowestBuyingRate: true,
          lowestSellingRate: true,
          Name: true,
          sellCurrency: true,
          sellingRate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Currency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: CurrencyWhereUniqueInput
  ): Promise<Currency | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          buyCurrency: true,
          buyingRate: true,
          createdAt: true,

          exchangeOffice: {
            select: {
              id: true,
            },
          },

          highestBuyingRate: true,
          highestSellingRate: true,
          id: true,
          iso: true,
          lowestBuyingRate: true,
          lowestSellingRate: true,
          Name: true,
          sellCurrency: true,
          sellingRate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Get("/:id/currencyExchanges")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => CurrencyExchangeWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyCurrencyExchanges(
    @common.Req() request: Request,
    @common.Param() params: CurrencyWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<CurrencyExchange[]> {
    const query: CurrencyExchangeWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CurrencyExchange",
    });
    const results = await this.service.findCurrencyExchanges(params.id, {
      where: query,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Post("/:id/currencyExchanges")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async createCurrencyExchanges(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: CurrencyWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      currencyExchanges: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Currency",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Currency"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Patch("/:id/currencyExchanges")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async updateCurrencyExchanges(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: CurrencyWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      currencyExchanges: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Currency",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Currency"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Delete("/:id/currencyExchanges")
  @nestAccessControl.UseRoles({
    resource: "Currency",
    action: "update",
    possession: "any",
  })
  async deleteCurrencyExchanges(
    @common.Param() params: CurrencyWhereUniqueInput,
    @common.Body() body: CurrencyWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      currencyExchanges: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Currency",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Currency"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
