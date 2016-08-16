import { Component, OnInit } from "@angular/core";

import { PeopleService } from "../../Services";
import { IPerson } from "../../../../Entity";

@Component({
    selector: "home",
    templateUrl: "/components/home/home.html",
    styles: [require("./home.scss")]
})
export class HomeComponent implements OnInit {
    constructor(private peopleService: PeopleService) { }

    public People: IPerson[] = [];
    public Title = "Dru Dré";

    ngOnInit(): void {
        this.peopleService.GetPerson()
            .subscribe((res: IPerson[]) => this.People = res);

        console.log("Init");
    }
}
