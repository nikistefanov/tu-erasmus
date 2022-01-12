import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './modules/admin/admin.module';

import { registerLocaleData } from '@angular/common';
import localBg from '@angular/common/locales/bg';
registerLocaleData(localBg);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
    AdminModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "bg-BG"},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
