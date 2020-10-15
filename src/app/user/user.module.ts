import {ReactiveFormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { GoogleSigninDirective } from './google-signin.directive';
import {SharedModule} from '../shared/shared.module';
import { EmailComponent } from './email/email.component';


@NgModule({
  declarations: [LoginComponent, GoogleSigninDirective, EmailComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
