import { Kernel  } from "inversify";
import "reflect-metadata";

import { PeopleService } from "./";

let Types = {
    PeopleService: "PeopleService"
}

let KernelConfig = new Kernel();

KernelConfig.bind<PeopleService>(Types.PeopleService).to(PeopleService);

export { KernelConfig, Types };