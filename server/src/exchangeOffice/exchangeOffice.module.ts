import { Module } from "@nestjs/common";
import { ExchangeOfficeModuleBase } from "./base/exchangeOffice.module.base";
import { ExchangeOfficeService } from "./exchangeOffice.service";
import { ExchangeOfficeController } from "./exchangeOffice.controller";
import { ExchangeOfficeResolver } from "./exchangeOffice.resolver";

@Module({
  imports: [ExchangeOfficeModuleBase],
  controllers: [ExchangeOfficeController],
  providers: [ExchangeOfficeService, ExchangeOfficeResolver],
  exports: [ExchangeOfficeService],
})
export class ExchangeOfficeModule {}
