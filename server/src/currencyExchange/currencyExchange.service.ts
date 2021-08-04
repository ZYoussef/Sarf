import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CurrencyExchangeServiceBase } from "./base/currencyExchange.service.base";

@Injectable()
export class CurrencyExchangeService extends CurrencyExchangeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
