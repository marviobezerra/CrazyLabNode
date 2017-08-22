import { Router } from "express";

export abstract class BaseApi {

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