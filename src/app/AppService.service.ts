import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { resolve } from "url";

import "rxjs/add/operator/map";

@Injectable()
export class AppService {

    constructor(public http: Http) { }

     private url: string = "http://localhost:2403/user-contacts";

    getUsers() {
        return this.http.get(this.url).map(res => res.json());
    }

    addUser(user) {
        return this.http.post(this.url, user).map(res => res.json());
    }
}