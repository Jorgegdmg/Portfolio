import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';  

import { routes } from './app.routes';
import { Educacion } from './Educacion/educacion';
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

