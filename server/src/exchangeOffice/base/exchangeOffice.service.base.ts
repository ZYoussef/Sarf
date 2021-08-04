import { PrismaService } from "nestjs-prisma";
import { Prisma, ExchangeOffice, Currency } from "@prisma/client";

export class ExchangeOfficeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ExchangeOfficeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExchangeOfficeFindManyArgs>
  ): Promise<number> {
    return this.prisma.exchangeOffice.count(args);
  }

  async findMany<T extends Prisma.ExchangeOfficeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExchangeOfficeFindManyArgs>
  ): Promise<ExchangeOffice[]> {
    return this.prisma.exchangeOffice.findMany(args);
  }
  async findOne<T extends Prisma.ExchangeOfficeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExchangeOfficeFindUniqueArgs>
  ): Promise<ExchangeOffice | null> {
    return this.prisma.exchangeOffice.findUnique(args);
  }
  async create<T extends Prisma.ExchangeOfficeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExchangeOfficeCreateArgs>
  ): Promise<ExchangeOffice> {
    return this.prisma.exchangeOffice.create<T>(args);
  }
  async update<T extends Prisma.ExchangeOfficeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExchangeOfficeUpdateArgs>
  ): Promise<ExchangeOffice> {
    return this.prisma.exchangeOffice.update<T>(args);
  }
  async delete<T extends Prisma.ExchangeOfficeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExchangeOfficeDeleteArgs>
  ): Promise<ExchangeOffice> {
    return this.prisma.exchangeOffice.delete(args);
  }

  async findCurrencies(
    parentId: string,
    args: Prisma.CurrencyFindManyArgs
  ): Promise<Currency[]> {
    return this.prisma.exchangeOffice
      .findUnique({
        where: { id: parentId },
      })
      .currencies(args);
  }
}
