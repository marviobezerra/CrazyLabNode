import * as express from "express";
import { PeopleApi } from "./Server/Api/People.Api";
import { BaseApi } from "./Server/Api/BaseApi";

export class Application {

  public AppExpress: express.Application;
  private APIS: Array<BaseApi> = [];

  constructor() {
    this.AppExpress = express();
    this.Setup();
  }

  private Setup(): void {
    let appRouter = express.Router();
    let apiRouter = express.Router();
    appRouter.get("/", this.Index);

    this.APIS.push(new PeopleApi(1, apiRouter));

    this.AppExpress.use(appRouter);
    this.AppExpress.use("/api", apiRouter);
  }

  private Index(req: express.Request, res: express.Response, next: express.NextFunction): void {
    res.send("Hey you!!!!");
  }
}