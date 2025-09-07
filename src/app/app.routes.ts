import { Routes } from '@angular/router';
import { Educacion } from './Educacion/educacion';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Proyectos } from './proyectos/proyectos';
import { Contacto } from './contacto/contacto';

export const routes: Routes = [
  { path: '', component: Educacion },
  { path: 'sobre-mi', component: SobreMi },
  { path: 'proyectos', component: Proyectos },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '', pathMatch: 'full' } // ruta inválida → redirige a Home
];
