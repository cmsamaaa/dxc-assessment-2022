import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";

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
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    if (!this.authenticationService.isUserLoggedIn())
      this.router.navigate(['login']);

    this.username = this.route.snapshot.params['username'];
  }

}
