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
import { ExchangeOfficeService } from "../exchangeOffice.service";
import { ExchangeOfficeCreateInput } from "./ExchangeOfficeCreateInput";
import { ExchangeOfficeWhereInput } from "./ExchangeOfficeWhereInput";
import { ExchangeOfficeWhereUniqueInput } from "./ExchangeOfficeWhereUniqueInput";
import { ExchangeOfficeFindManyArgs } from "./ExchangeOfficeFindManyArgs";
import { ExchangeOfficeUpdateInput } from "./ExchangeOfficeUpdateInput";
import { ExchangeOffice } from "./ExchangeOffice";
import { CurrencyWhereInput } from "../../currency/base/CurrencyWhereInput";
import { Currency } from "../../currency/base/Currency";

export class ExchangeOfficeControllerBase {
  constructor(
    protected readonly service: ExchangeOfficeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "ExchangeOffice",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: ExchangeOffice })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ExchangeOfficeCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ExchangeOffice> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ExchangeOffice",
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
        `providing the properties: ${properties} on ${"ExchangeOffice"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        address: true,
        createdAt: true,
        id: true,
        managerName: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "ExchangeOffice",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [ExchangeOffice] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ExchangeOfficeFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ExchangeOffice[]> {
    const args = plainToClass(ExchangeOfficeFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ExchangeOffice",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        address: true,
        createdAt: true,
        id: true,
        managerName: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "ExchangeOffice",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: ExchangeOffice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ExchangeOfficeWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ExchangeOffice | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ExchangeOffice",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        address: true,
        createdAt: true,
        id: true,
        managerName: true,
        name: true,
        phoneNumber: true,
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
    resource: "ExchangeOffice",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ExchangeOffice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ExchangeOfficeWhereUniqueInput,
    @common.Body()
    data: ExchangeOfficeUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ExchangeOffice | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ExchangeOffice",
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
        `providing the properties: ${properties} on ${"ExchangeOffice"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          id: true,
          managerName: true,
          name: true,
          phoneNumber: true,
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
    resource: "ExchangeOffice",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ExchangeOffice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ExchangeOfficeWhereUniqueInput
  ): Promise<ExchangeOffice | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          address: true,
          createdAt: true,
          id: true,
          managerName: true,
          name: true,
          phoneNumber: true,
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
  @common.Get("/:id/currencies")
  @nestAccessControl.UseRoles({
    resource: "ExchangeOffice",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => CurrencyWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyCurrencies(
    @common.Req() request: Request,
    @common.Param() params: ExchangeOfficeWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Currency[]> {
    const query: CurrencyWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Currency",
    });
    const results = await this.service.findCurrencies(params.id, {
      where: query,
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
  @common.Post("/:id/currencies")
  @nestAccessControl.UseRoles({
    resource: "ExchangeOffice",
    action: "update",
    possession: "any",
  })
  async createCurrencies(
    @common.Param() params: ExchangeOfficeWhereUniqueInput,
    @common.Body() body: ExchangeOfficeWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      currencies: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ExchangeOffice",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"ExchangeOffice"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/currencies")
  @nestAccessControl.UseRoles({
    resource: "ExchangeOffice",
    action: "update",
    possession: "any",
  })
  async updateCurrencies(
    @common.Param() params: ExchangeOfficeWhereUniqueInput,
    @common.Body() body: ExchangeOfficeWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      currencies: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ExchangeOffice",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"ExchangeOffice"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/currencies")
  @nestAccessControl.UseRoles({
    resource: "ExchangeOffice",
    action: "update",
    possession: "any",
  })
  async deleteCurrencies(
    @common.Param() params: ExchangeOfficeWhereUniqueInput,
    @common.Body() body: ExchangeOfficeWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      currencies: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ExchangeOffice",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"ExchangeOffice"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
