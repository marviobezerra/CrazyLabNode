import { Component, OnInit } from "@angular/core";

@Component({
    selector: "sign-in-social",
    templateUrl: "/components/account/sign-in-social.html",
    styles: [require("./sign-in-social.scss")]
})
export class SignInSocialComponent implements OnInit {
    constructor() { }

    public Go(provider: string): void {
        window.location.href = "/login?authscheme=" + provider;
    }

    ngOnInit(): void { }
}
