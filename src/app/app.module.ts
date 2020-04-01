import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ConditionsComponent } from './pages/conditions/conditions.component';
import { PostComponent } from './components/post/post.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { RegisterComponent } from './pages/register/register.component';
import {AlertComponent} from './components/alert/alert.component';
import { LoginComponent } from './components/login/login.component';
import {JwtInterceptor} from './services/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PageNotFoundComponent,
    ConditionsComponent,
    PostComponent,
    ListPostComponent,
    RegisterComponent,
    AlertComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
