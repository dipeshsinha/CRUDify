import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavLoginComponent } from './nav-login/nav-login.component';
import { CustomNavDirective } from './directives/custom-nav.directive';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  // Adding all the possible routes
  { path: '', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'users', component: UsersComponent},
  { path: 'edit/:id', component: UpdateUserComponent},
  { path: 'create', component: CreateUserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavLoginComponent,
    CustomNavDirective,
    SignupComponent,
    UsersComponent,
    NavMainComponent,
    UpdateUserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
