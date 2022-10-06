import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AccountDataService} from "../service/data/account-data.service";

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
    private service: AccountDataService
  ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    this.service.executeLoginService(this.username, this.password).subscribe(
      response => this.handleLoginResponse(response)
    );
  }

  handleLoginResponse(response) {
      this.invalidLogin = !response;
  }
}
