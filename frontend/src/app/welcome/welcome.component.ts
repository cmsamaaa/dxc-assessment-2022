import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";
import {AccountDataService} from "../service/data/account-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  username = '';
  role = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public accountDataService: AccountDataService,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (!this.authenticationService.isUserLoggedIn())
      this.router.navigate(['login']);

    this.username = sessionStorage.getItem('authenticatedUser');

    if (!this.accountDataService.isAccountDataStored())
      this.accountDataService.executeAccountService(this.username).subscribe(response => {
        this.name = sessionStorage.getItem('authenticatedName');
        this.role = sessionStorage.getItem('authenticatedRole');
      });
    else {
      this.name = sessionStorage.getItem('authenticatedName');
      this.role = sessionStorage.getItem('authenticatedRole');
    }
  }

}
