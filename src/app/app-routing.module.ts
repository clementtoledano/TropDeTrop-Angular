import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {HomeComponent} from './components/home/home.component';
import {ConditionsComponent} from './pages/conditions/conditions.component';
import {RegisterComponent} from './pages/register/register.component';


const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'signin', component: SigninComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
