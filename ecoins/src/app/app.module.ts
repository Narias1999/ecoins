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
import { IniciarComponent } from './iniciar/iniciar.component';
import { HomeComponent } from './home/home.component';
import { ModelService } from './model.service';
import { HttpClientModule } from '@angular/common/http';

import { StartRecyclingComponent } from './start-recycling/start-recycling.component';
import { PremiosComponent } from './premios/premios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterCiuComponent,
    IniciarComponent,
    HomeComponent,
    StartRecyclingComponent,
    PremiosComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [ModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
