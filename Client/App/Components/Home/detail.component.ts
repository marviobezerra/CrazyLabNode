import { Component, Input } from "@angular/core";

import { IPerson } from "../../../../Entity";

@Component({
	selector: "person-detail",
	templateUrl: "/Components/Home/detail.html",
	styleUrls: [require("./detail.scss")]
})
export class DetailComponent {
	constructor() {
		this.Person = {
			IdPerson: "1",
			Email: "ze@gmail.com",
			Name: "Nada"
		};
	}

	@Input() Person: IPerson;
}