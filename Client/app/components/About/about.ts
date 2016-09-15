import { Component, OnInit } from "@angular/core";

@Component({
    selector: "about",
    templateUrl: "/components/about/about.html",
    styles: [require("./about.scss")]
})
export class AboutComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
