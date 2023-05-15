import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {Jwt} from "../model/jwt"
import {NewUser} from "../model/new-user";
import { Observable } from "rxjs"
import { Login } from "../model/login";

@Injectable({providedIn: "root"})
export class Auth {
    url = "http://localhost:8080/auth/"
    constructor(private httpClient: HttpClient) {

    }
    public nuevo(newUser: NewUser): Observable<any> {
        return this.httpClient.post<any>(this.url + "nuevo", newUser)
    }
    public login(login: Login): Observable<Jwt> {
        return this.httpClient.post<Jwt>(this.url + "login", login)
    }
}
