import * as express from "express";
import * as path from "path";

import { PeopleRoute } from "./Routes";

export class App {

    public App: express.Application;

    constructor() {
        this.App = express();
        this.Config();
        this.Routes();
    }

    private Config(): void {
        this.App.use(express.static(process.env.NODE_PATH + "/public"));
    }

    private Routes(): void {
        let router: express.IRouter = express.Router();
        router.get("/", this.index);
        
        var apiAdress = "/api/v1/";

        var peopleRoute = new PeopleRoute(router, apiAdress);

        this.App.use(router);
        this.App.use(this.index);
    }

    private index(req: express.Request, res: express.Response, next: express.NextFunction) : void {
        res.sendFile(path.resolve(process.env.NODE_PATH + '/public/index.html'));
    }
}