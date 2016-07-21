import * as express from "express";

export class PersonApi { 

    public index(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.send({ value: "He yo ... let's go ..." });
    }
}