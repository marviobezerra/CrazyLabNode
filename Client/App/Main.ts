import { bootstrap } from "@angular/platform-browser-dynamic";
import { AppComponent } from "./Components/Home/";

bootstrap(AppComponent)
    .catch((reason: any) => console.error(reason));
