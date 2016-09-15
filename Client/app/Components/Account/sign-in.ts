import { Component, OnInit } from "@angular/core";

@Component({
    selector: "sign-in",
    templateUrl: "/components/account/sign-in.html",
    styles: [require("./sign-in.scss")]
})
export class SignInComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }
}
