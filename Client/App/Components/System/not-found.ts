import { Component, OnInit } from "@angular/core";

@Component({
    selector: "not-found",
    templateUrl: "/components/system/not-found.html",
    styles: [require("./not-found.scss")]
})
export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
