import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { IPerson }  from "../../../Entity";

@Injectable()
export class PeopleService {
	constructor(private http: Http) {

	}

	public GetCompany(): Observable<IPerson> {

		var result: Observable<IPerson> = this.http.get("/api/v1/people/company")
            .debounceTime(400)
            .map((res: Response, index: number) => res.json())
            .share();

		return result;
	}

	public GetPerson(): Observable<IPerson[]> {

		var result: Observable<IPerson[]> = this.http.get("/api/v1/people")
            .debounceTime(400)
            .map((res: Response, index: number) => res.json())
            .share();

		return result;
	}
}