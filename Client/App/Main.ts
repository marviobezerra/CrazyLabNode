import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";

import { AppPrivateModule } from "./app-private.module";
import { AppPublicModule } from "./app-public.module";

declare var x: any;

if (x.p === 1) {
    enableProdMode();
}

if (x.a === 1) {
    platformBrowserDynamic().bootstrapModule(AppPrivateModule);
} else {
    platformBrowserDynamic().bootstrapModule(AppPublicModule);
}