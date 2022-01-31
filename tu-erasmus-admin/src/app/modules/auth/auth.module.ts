import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const COMPONENTS = [
    LoginComponent,
    ChangePasswordComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    RouterModule
  ],
  exports: [...COMPONENTS],
  providers: [
      AuthService
  ]
})
export class AuthModule { }
