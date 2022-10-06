import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AccountDataService} from "../service/data/account-data.service";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  errorMessage: string = 'Invalid userid or password';
  invalidLogin: boolean = false;

  constructor(
    private router: Router,
    public accountDataService: AccountDataService,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn())
      this.router.navigate(['welcome']);
  }

  handleLogin() {
    this.accountDataService.executeLoginService(this.username, this.password)
      .subscribe(response => this.authenticate(response));
  }

  authenticate(response) {
    if (response)
      this.router.navigate(['welcome']);

    this.invalidLogin = !response;
  }
}
