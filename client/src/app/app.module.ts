import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component'
import { CreateuserComponent } from './admin/createuser/createuser.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './_modules/shared.module';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ManageusersComponent } from './admin/manageusers/manageusers.component';
import { MemberlistCardComponent } from './admin/memberlist-card/memberlist-card.component';
import { MemberCardComponent } from './admin/member-card/member-card.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { AdditionalmemberdetailsCardComponent } from './admin/additionalmemberdetails-card/additionalmemberdetails-card.component';
import { UserEditComponent } from './profile/user-edit/user-edit.component';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { DateInputComponent } from './_forms/date-input/date-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CreateuserComponent,
    AdmindashboardComponent,
    MessagesComponent,
    HomeComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    SidenavComponent,
    ManageusersComponent,
    MemberlistCardComponent,
    MemberCardComponent,
    AdditionalmemberdetailsCardComponent,
    UserEditComponent,
    TextInputComponent,
    DateInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
