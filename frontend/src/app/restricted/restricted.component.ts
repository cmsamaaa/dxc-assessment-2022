import { Component, OnInit } from '@angular/core';
import {AccountDataService} from "../service/data/account-data.service";
import {AuthenticationService} from "../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.css']
})
export class RestrictedComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    if (!this.authenticationService.isUserManager())
      this.router.navigate(['welcome']);
  }

}
