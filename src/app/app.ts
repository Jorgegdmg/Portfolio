/** import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

import { routes } from './app.routes';
import { AppComponent } from './app';
import { Home } from './home/home';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Proyectos } from './proyectos/proyectos';
import { Contacto } from './contacto/contacto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}

@NgModule({
  declarations: [
    App,
    Home,
    SobreMi,
    Proyectos,
    Contacto
  ],
  imports: [
    BrowserModule,
    routes,
    CommonModule 
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { } **/

import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';  

import { routes } from './app.routes';
import { Home } from './home/home';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Proyectos } from './proyectos/proyectos';
import { Contacto } from './contacto/contacto';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [
    RouterOutlet, 
    RouterLink,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('portfolio');
}

