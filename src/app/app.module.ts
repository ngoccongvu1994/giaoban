import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TodoComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
