import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterCiuComponent } from './register-ciu/register-ciu.component';
<<<<<<< HEAD
import { IniciarComponent } from './iniciar/iniciar.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 2106d25857f5fad2a3536c5203315bc25c37cc2c

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterCiuComponent,
<<<<<<< HEAD
    IniciarComponent
=======
    HomeComponent
>>>>>>> 2106d25857f5fad2a3536c5203315bc25c37cc2c
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
