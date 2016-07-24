import { bootstrap } from "@angular/platform-browser-dynamic";

import { AppServices } from "./Services/app-services.providers";
import { AppComponent } from "./Components/Home/";

bootstrap(AppComponent,
    AppServices)
    .catch((reason: any) => console.error(reason));

