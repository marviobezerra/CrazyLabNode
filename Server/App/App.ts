import * as express from "express";
import * as path from "path";

export class App {
    public App: express.Application;

    constructor() {
        this.App = express();
        this.Config();
        this.Routes();
    }

    private Config(): void {
        this.App.use(express.static(process.env.NODE_PATH + "/public"));
        this.App.use("/public", express.static(process.env.NODE_PATH + "/public"));
    }

    private Routes(): void {
        let router: express.IRouter = express.Router();

        router.get("/", this.index);
        router.get("/api/v1/person", this.api);
        router.get("/api/v1/company", this.apiTeste);

        this.App.use(router);
        this.App.use(this.index);
    }

    private api(req: express.Request, res: express.Response, next: express.NextFunction) {
        let response = {
            name: "Marvio ... EU!!!! Mesmo neh!!!"
        };

        res.send(response);
    }

    private apiTeste(req: express.Request, res: express.Response, next: express.NextFunction) {
        let response = {
            name: "Marvio"
        };

        res.send(response);
    }

    private index(req: express.Request, res: express.Response, next: express.NextFunction) {
         res.sendFile(path.resolve(process.env.NODE_PATH + '/public/index.html'));
    }
}