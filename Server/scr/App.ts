import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

import { IndexController } from "./Routes/Index";
import { PersonApi } from "./Routes/Api";

class Server{

    constructor(){
        this.app = express();
        this.Config();
        this.Routes();
    }

    public static bootstrap(): Server {
        return new Server();
    }

    public app: express.Application;

    private Config() : void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, "public")));
    }

    private Routes() : void {
        let router: express.Router = express.Router();
        
        var indexController : IndexController = new IndexController();
        var personApi : PersonApi = new PersonApi();

        router.get("/", indexController.index.bind(indexController.index));
        router.get("/api/v1/person", personApi.index);

        this.app.use(router);
    }
}

var server = Server.bootstrap();
export = server.app;