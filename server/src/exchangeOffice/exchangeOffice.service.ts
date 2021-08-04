import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ExchangeOfficeServiceBase } from "./base/exchangeOffice.service.base";

@Injectable()
export class ExchangeOfficeService extends ExchangeOfficeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
