import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExchangeOfficeService } from "./exchangeOffice.service";
import { ExchangeOfficeControllerBase } from "./base/exchangeOffice.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("exchange-offices")
@common.Controller("exchange-offices")
export class ExchangeOfficeController extends ExchangeOfficeControllerBase {
  constructor(
    protected readonly service: ExchangeOfficeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
