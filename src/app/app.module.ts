import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginService}   from './login.service';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {UserService} from "./user.service";
import { BlogsComponent } from './blogs/blogs.component';
import { AddComponent } from './add/add.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { CategoryComponent } from './category/category.component';
import { FormComponent } from './form/form.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { SearchedComponent } from './searched/searched.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component:UserComponent},
  {path:'add', component:AddComponent},
  {path:'fav',component:FavouriteComponent},
  {path:'category', component:CategoryComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    NavbarComponent,
    SidebarComponent,
    BlogsComponent,
    AddComponent,
    Navbar2Component,
    CategoryComponent,
    FormComponent,
    FavouriteComponent,
    SearchedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [LoginService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
