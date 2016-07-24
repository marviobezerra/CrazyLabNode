import { Observable, Observer } from "rxjs";

export interface IPerson {
    IdPerson: string;
    Name: string;
    Email: string;
}

export class PeopleService {
	public GetPerson(): Observable<IPerson> {

		return Observable.create((observer: Observer<IPerson>) => {
			observer
                .next({
                    Name: "Márvio",
                    Email: "1@2.com",
                    IdPerson: "1"
                });

            observer.complete();
        });
	}

	public GetPeople(count: number): Observable<IPerson[]> {

		return Observable.create((observer: Observer<IPerson[]>) => {

			let result: IPerson[] = [];

			for (var index = 0; index < count; index++) {
				result.push({
					Name: "Márvio " + index.toString(),
                    Email: index.toString() + "@2.com",
                    IdPerson: index.toString()
				});
			}

			observer
                .next(result);

            observer.complete();
        });
	}
}