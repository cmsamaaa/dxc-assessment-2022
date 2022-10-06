import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  { path: '', component: LoginFormComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
