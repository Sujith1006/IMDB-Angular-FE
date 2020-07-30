import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent } from '../app/Components/signup/signup.component'
import {LoginComponent} from '../app/Components/login/login.component'
import { ImdbhomeComponent } from '../app/Components/imdbhome/imdbhome.component';

const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'login' ,component:LoginComponent},
  {path:'imdbhome',component:ImdbhomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SignupComponent,LoginComponent]