import * as express from "express";

export class IndexController {

    public index(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.send({ value: "Hello world! I'm Index ... lol" });
    }
}