import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterCiuComponent } from './register-ciu/register-ciu.component'
import { IniciarComponent } from './iniciar/iniciar.component'
import { HomeComponent } from './home/home.component'
import { PremiosComponent } from './premios/premios.component'
import { StartRecyclingComponent } from './start-recycling/start-recycling.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterCiuComponent },
  { path: 'home', component: HomeComponent },
  { path: 'start-recycling', component: StartRecyclingComponent },
  { path: '', component: IniciarComponent },
  { path: 'premios', component: PremiosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
