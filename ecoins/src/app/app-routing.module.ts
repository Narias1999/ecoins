import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterCiuComponent } from './register-ciu/register-ciu.component'

const routes: Routes = [
  { path: '/login', component: LoginComponent },
  { path: '/register', component: RegisterCiuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
