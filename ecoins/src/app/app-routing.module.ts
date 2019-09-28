import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterCiuComponent } from './register-ciu/register-ciu.component'
import { IniciarComponent } from './iniciar/iniciar.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterCiuComponent },
  { path: '', component: IniciarComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
