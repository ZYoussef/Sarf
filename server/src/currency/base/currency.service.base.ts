import { PrismaService } from "nestjs-prisma";
import { Prisma, Currency, CurrencyExchange } from "@prisma/client";

export class CurrencyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CurrencyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyFindManyArgs>
  ): Promise<number> {
    return this.prisma.currency.count(args);
  }

  async findMany<T extends Prisma.CurrencyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyFindManyArgs>
  ): Promise<Currency[]> {
    return this.prisma.currency.findMany(args);
  }
  async findOne<T extends Prisma.CurrencyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyFindUniqueArgs>
  ): Promise<Currency | null> {
    return this.prisma.currency.findUnique(args);
  }
  async create<T extends Prisma.CurrencyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyCreateArgs>
  ): Promise<Currency> {
    return this.prisma.currency.create<T>(args);
  }
  async update<T extends Prisma.CurrencyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyUpdateArgs>
  ): Promise<Currency> {
    return this.prisma.currency.update<T>(args);
  }
  async delete<T extends Prisma.CurrencyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyDeleteArgs>
  ): Promise<Currency> {
    return this.prisma.currency.delete(args);
  }

  async findCurrencyExchanges(
    parentId: string,
    args: Prisma.CurrencyExchangeFindManyArgs
  ): Promise<CurrencyExchange[]> {
    return this.prisma.currency
      .findUnique({
        where: { id: parentId },
      })
      .currencyExchanges(args);
  }
}
