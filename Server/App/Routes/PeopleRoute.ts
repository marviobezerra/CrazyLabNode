import * as express from "express";
import * as url from "url";

import { PeopleService, KernelConfig, Types } from "../Services";
import { IPerson } from "../../../Entity";

export class PeopleRoute {

	constructor(router: express.IRouter, baseAddress: string) {
		var address = url.resolve(baseAddress, "people/");
		
		router.get(url.resolve(address, ""), this.Index);
        router.get(url.resolve(address, "company"), this.Company);
	}

	private Index(req: express.Request, res: express.Response, next: express.NextFunction) : void {

        var service = KernelConfig.get<PeopleService>(Types.PeopleService);

        service.GetPeople(50)
            .map((value: IPerson[], index: number) => value)
            .subscribe((result: IPerson[]) => res.send(result));
    }

	private Company(req: express.Request, res: express.Response, next: express.NextFunction) : void {

        var service = KernelConfig.get<PeopleService>(Types.PeopleService);

        service.GetPerson()
            .map((value: IPerson, index: number) => value)
            .subscribe((result: IPerson) => res.send(result));
    }
}