import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { BasicAuthGuard } from "../../auth/basicAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { CurrencyController } from "../currency.controller";
import { CurrencyService } from "../currency.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  buyCurrency: "true",
  buyingRate: 42.42,
  createdAt: new Date(),
  highestBuyingRate: "exampleHighestBuyingRate",
  highestSellingRate: 42.42,
  id: "exampleId",
  iso: "exampleIso",
  lowestBuyingRate: 42.42,
  lowestSellingRate: 42.42,
  Name: "exampleName",
  sellCurrency: "true",
  sellingRate: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  buyCurrency: "true",
  buyingRate: 42.42,
  createdAt: new Date(),
  highestBuyingRate: "exampleHighestBuyingRate",
  highestSellingRate: 42.42,
  id: "exampleId",
  iso: "exampleIso",
  lowestBuyingRate: 42.42,
  lowestSellingRate: 42.42,
  Name: "exampleName",
  sellCurrency: "true",
  sellingRate: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    buyCurrency: "true",
    buyingRate: 42.42,
    createdAt: new Date(),
    highestBuyingRate: "exampleHighestBuyingRate",
    highestSellingRate: 42.42,
    id: "exampleId",
    iso: "exampleIso",
    lowestBuyingRate: 42.42,
    lowestSellingRate: 42.42,
    Name: "exampleName",
    sellCurrency: "true",
    sellingRate: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  buyCurrency: "true",
  buyingRate: 42.42,
  createdAt: new Date(),
  highestBuyingRate: "exampleHighestBuyingRate",
  highestSellingRate: 42.42,
  id: "exampleId",
  iso: "exampleIso",
  lowestBuyingRate: 42.42,
  lowestSellingRate: 42.42,
  Name: "exampleName",
  sellCurrency: "true",
  sellingRate: 42.42,
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Currency", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CurrencyService,
          useValue: service,
        },
      ],
      controllers: [CurrencyController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(BasicAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /currencies", async () => {
    await request(app.getHttpServer())
      .post("/currencies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /currencies", async () => {
    await request(app.getHttpServer())
      .get("/currencies")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /currencies/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/currencies"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /currencies/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/currencies"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
