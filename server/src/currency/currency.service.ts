import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CurrencyServiceBase } from "./base/currency.service.base";

@Injectable()
export class CurrencyService extends CurrencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
