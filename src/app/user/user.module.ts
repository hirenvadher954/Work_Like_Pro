import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { GoogleSigninDirective } from './google-signin.directive';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent, GoogleSigninDirective],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
