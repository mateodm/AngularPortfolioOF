import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import { HttpClient} from "@angular/common/http";
import { Person } from "../model/person.model";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  connection = "http://localhost:8080/"
  constructor(private http: HttpClient) {

   }
   public getPerson(): Observable<Person> {
    return this.http.get<Person>(this.connection + "get/person")
   }
}
