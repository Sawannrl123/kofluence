import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

//https://jsonplaceholder.typicode.com/photos

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class ApiCallService {
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/photos");
  }
}
