import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CurrencyExchangeService } from "./currencyExchange.service";
import { CurrencyExchangeControllerBase } from "./base/currencyExchange.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("currency-exchanges")
@common.Controller("currency-exchanges")
export class CurrencyExchangeController extends CurrencyExchangeControllerBase {
  constructor(
    protected readonly service: CurrencyExchangeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
