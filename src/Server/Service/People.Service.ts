import { IPeopleEntity } from "../../Entity/IPeople.Entity";
import { Observable, Observer } from "rxjs";

export class PeopleService {
    public Get(): Observable<Array<IPeopleEntity>> {
        return Observable.create((observer: Observer<Array<IPeopleEntity>>) => {

            let result: Array<IPeopleEntity> = [];

            for (let i = 0; i < 10; i++) {
                result.push({
                    Id: i.toString(),
                    Email: "marvio.bezerra@gmail.com",
                    Name: "Marvio Bezerra"
                });
            }

            observer.next(result);
            observer.complete();
        });
    }
}