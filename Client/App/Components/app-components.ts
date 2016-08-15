import { provideRouter, RouterConfig } from "@angular/router";

import { AppComponent } from "./Home";
import { SignInComponent, SignUpComponent, SignInSocialComponent } from "./Account";
import { AboutHomeComponent, AboutComponent, ContactComponent, PrivacyComponent, TermsComponent } from "./About";
import { NotFoundComponent } from "./System";

const PrivateRoutes: RouterConfig = [
    {
        path: "", component: AppComponent
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

const PublicRoutes: RouterConfig = [
    {
        path: "", component: AppComponent
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
        path: "sign-in", component: SignInComponent
    },
    {
        path: "sign-up", component: SignUpComponent
    },
    {
        path: "404", component: NotFoundComponent
    },
    {
        path: "**", redirectTo: "404"
    }    
];

export const AppPrivateRoutes = [provideRouter(PrivateRoutes)];
export const AppPublicRoutes = [provideRouter(PublicRoutes)];