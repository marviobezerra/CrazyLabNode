import { Component } from "@angular/core";

import { PeopleService } from "../../Services";
import { IPerson } from "../../../../Entity";

@Component({
  selector: "app-root",
  templateUrl: "/Components/Home/app-home.html",
  styleUrls: [require("./app-home.scss")]
})
export class AppComponent {

  constructor(private peopleService: PeopleService) {
      peopleService.GetPerson()
      .subscribe(res => this.People = res);
  }

  public People: IPerson[] = [];
  public Title = "App works! lol";
}
