import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeLoginService(username: string, password: string) {
    console.log("Execute Login Service");
    return this.http.post('http://localhost:8080/login', {
      username: username,
      password: password
    });
  }
}
