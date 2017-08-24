import { Router } from "express";

export abstract class BaseApi {

    constructor(version: number, router: Router) {
        this.Setup(version, router);
    }

    protected GetName(version: number, routeAddress: string, routeName?: string): string {
        let result = `/v${version}/${routeAddress}`

        if (routeName) {
            result += `/${routeName}`;
        }

        console.log("Maped API: ", result);

        return result;
    }

    abstract Setup(version: number, router: Router): void;
}