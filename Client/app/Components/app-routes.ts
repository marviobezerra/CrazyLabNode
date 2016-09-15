﻿import { provideRouter, RouterConfig } from "@angular/router";

import { HomeComponent } from "./Home";
import { SignInComponent, SignUpComponent, SignInSocialComponent } from "./Account";
import { AboutHomeComponent, AboutComponent, ContactComponent, PrivacyComponent, TermsComponent } from "./About";
import { NotFoundComponent } from "./System";

const Routes: RouterConfig = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "about", component: AboutHomeComponent, children: [
            { path: "", component: AboutComponent },
            { path: "contact", component: ContactComponent },
            { path: "terms", component: TermsComponent },
            { path: "privacy", component: PrivacyComponent }
        ]
    },
    {
        path: "404", component: NotFoundComponent
    },
    {
        path: "**", redirectTo: "404"
    }
];

export const AppRoutes = [provideRouter(Routes)];