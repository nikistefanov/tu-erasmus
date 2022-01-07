import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
    // RegisterComponent,
    LoginComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
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
