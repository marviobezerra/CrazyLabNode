import { Router, Request, Response } from "express";
import { BaseApi } from "./BaseApi";
import { PeopleService } from "../Service/People.Service";
import { IPeopleEntity } from "../../Entity/IPeople.Entity";

export class PeopleApi extends BaseApi {

    private Service: PeopleService;
    private Name = "people";

    constructor() {
        super();
        this.Service = new PeopleService();
    }

    public Setup(version: number, router: Router): void {
        router.get(this.GetName(version, this.Name), (req: Request, res: Response) => this.Index(req, res));
    }

    private Index(req: Request, res: Response): void {
        this.Service
            .Get()
            .subscribe((result: Array<IPeopleEntity>) => res.json(result));
    }
}