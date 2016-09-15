import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "layout",
    templateUrl: "/components/layout/layout.html",
    styles: [require("./layout.scss")]
})
export class LayoutComponent implements OnInit {
    constructor(private router: Router) {
    }

    public Go(url: string): void {
        this.router.navigate([url]);
    }

    ngOnInit(): void { }
}
