import { Component } from "@angular/core";

import { PeopleService } from "../../Services";
import { IPerson } from "../../../../Entity";
import { DetailComponent } from "./detail.component";

@Component({
  selector: "app-root",
  templateUrl: "/Components/Home/app-home.html",
  styleUrls: [require("./app-home.scss")],
  directives: [DetailComponent]
})
export class AppComponent {

  constructor(private peopleService: PeopleService) {
    peopleService.GetPerson()
      .subscribe(res => this.People = res);
  }

  public Selected: IPerson;
  public People: IPerson[] = [];
  public Title = "App works! lol";

  public SetPerson(person: IPerson): void {
    this.Selected = person;
  }
}
