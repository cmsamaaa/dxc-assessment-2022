import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeLoginService(username: string, password: string) {
    return this.http.post('http://localhost:8080/login', {
      username: username,
      password: password
    }).pipe(
      map(data => {
          if (data)
            sessionStorage.setItem('authenticatedUser', username);

          return data;
        }
      )
    );
  }

  executeAccountService(username: string) {
    return this.http.get('http://localhost:8080/user/' + username)
      .pipe(
        map((data: any) => {
            sessionStorage.setItem("authenticatedId", data.accountId);
            sessionStorage.setItem("authenticatedUser", data.username);
            sessionStorage.setItem("authenticatedName", data.name);
            sessionStorage.setItem("authenticatedRole", data.role);
          }
        )
      );
  }

  isAccountDataStored() {
    let accountId = sessionStorage.getItem('authenticatedId');
    let username = sessionStorage.getItem('authenticatedUser');
    let name = sessionStorage.getItem('authenticatedName');
    let role = sessionStorage.getItem('authenticatedRole');

    return accountId && username && name && role;
  }
}
