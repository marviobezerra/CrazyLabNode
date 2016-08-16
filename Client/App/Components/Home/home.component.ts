import { Component, OnInit } from "@angular/core";

@Component({
    selector: "home",
    templateUrl: "/components/home/home.html",
    styles: [require("./home.scss")]
})
export class HomeComponent implements OnInit {
    constructor() { }

    public Title = "Dru Dré";

    ngOnInit(): void { }
}
