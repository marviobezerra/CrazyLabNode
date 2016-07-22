import * as express from "express";
import * as path from "path";

export class Server {
    public App : express.Application;
    public AppPublicPath: string = "./.bin/public/";

    constructor(){
        this.App = express();
        this.Config();
        this.Routes();
    }

    private Config() : void {
        this.App.use(express.static(this.AppPublicPath));
    }

    private Routes() : void {
        let router: express.IRouter = express.Router();
        
        router.get("/*", this.index);
        router.get("/api/v1/person", this.api);

        this.App.use(router);
    }

    private api(req: express.Request, res: express.Response, next: express.NextFunction) {
        let response= {
            name: "Marvio"
         };

        res.send(response);
    }

    private index(req: express.Request, res: express.Response, next: express.NextFunction) {    
         res.sendFile(path.join(this.AppPublicPath, "index.html"));
    }
}