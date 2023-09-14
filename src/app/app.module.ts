import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactameComponent } from './components/contactame/contactame.component';
import { MiPortafolioComponent } from './components/mi-portafolio/mi-portafolio.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BackgroundComponent } from './components/background/background.component';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExperienciaComponent,
    ProyectosComponent,
    ContactameComponent,
    MiPortafolioComponent,
    FooterComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
