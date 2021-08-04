import { PrismaService } from "nestjs-prisma";
import { Prisma, CurrencyExchange, Currency } from "@prisma/client";

export class CurrencyExchangeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CurrencyExchangeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyExchangeFindManyArgs>
  ): Promise<number> {
    return this.prisma.currencyExchange.count(args);
  }

  async findMany<T extends Prisma.CurrencyExchangeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyExchangeFindManyArgs>
  ): Promise<CurrencyExchange[]> {
    return this.prisma.currencyExchange.findMany(args);
  }
  async findOne<T extends Prisma.CurrencyExchangeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyExchangeFindUniqueArgs>
  ): Promise<CurrencyExchange | null> {
    return this.prisma.currencyExchange.findUnique(args);
  }
  async create<T extends Prisma.CurrencyExchangeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyExchangeCreateArgs>
  ): Promise<CurrencyExchange> {
    return this.prisma.currencyExchange.create<T>(args);
  }
  async update<T extends Prisma.CurrencyExchangeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyExchangeUpdateArgs>
  ): Promise<CurrencyExchange> {
    return this.prisma.currencyExchange.update<T>(args);
  }
  async delete<T extends Prisma.CurrencyExchangeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CurrencyExchangeDeleteArgs>
  ): Promise<CurrencyExchange> {
    return this.prisma.currencyExchange.delete(args);
  }

  async findCurrency(
    parentId: string,
    args: Prisma.CurrencyFindManyArgs
  ): Promise<Currency[]> {
    return this.prisma.currencyExchange
      .findUnique({
        where: { id: parentId },
      })
      .currency(args);
  }
}
