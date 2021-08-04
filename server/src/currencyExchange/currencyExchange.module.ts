import { Module } from "@nestjs/common";
import { CurrencyExchangeModuleBase } from "./base/currencyExchange.module.base";
import { CurrencyExchangeService } from "./currencyExchange.service";
import { CurrencyExchangeController } from "./currencyExchange.controller";
import { CurrencyExchangeResolver } from "./currencyExchange.resolver";

@Module({
  imports: [CurrencyExchangeModuleBase],
  controllers: [CurrencyExchangeController],
  providers: [CurrencyExchangeService, CurrencyExchangeResolver],
  exports: [CurrencyExchangeService],
})
export class CurrencyExchangeModule {}
