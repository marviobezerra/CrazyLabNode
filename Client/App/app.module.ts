import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponents, AppRoutes } from "./Components";
import { LayoutComponent } from "./Components/Layout";

import { PeopleService } from "./Services";

import { MaterialModule } from "./Components";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        MaterialModule
    ],
    providers: [
        AppRoutes,
        PeopleService
    ],
    declarations: AppComponents,
    bootstrap: [LayoutComponent]
})
export class AppModule {

}