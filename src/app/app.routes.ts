import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Proyectos } from './proyectos/proyectos';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre-mi', component: SobreMi },
  { path: 'proyectos', component: Proyectos },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '', pathMatch: 'full' } // ruta inválida → redirige a Home
];
