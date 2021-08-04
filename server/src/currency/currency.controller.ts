import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CurrencyService } from "./currency.service";
import { CurrencyControllerBase } from "./base/currency.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("currencies")
@common.Controller("currencies")
export class CurrencyController extends CurrencyControllerBase {
  constructor(
    protected readonly service: CurrencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
