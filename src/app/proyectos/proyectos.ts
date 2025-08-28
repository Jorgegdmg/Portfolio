import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  imports: [RouterModule, CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {

  /* Inicializar las variable */
  proyectos: any[]=[]

  ngOnInit(){
    this.proyectos = [
    {
      titulo: 'Portfolio Personal',
      descripcion: 'Sitio web para mostrar mis trabajos y experiencia.',
      imagen: 'assets/proyecto1.jpg',
      tecnologias: ['Angular', 'Bootstrap', 'TypeScript'],
      link: 'https://miportfolio.com'
    },
    {
      titulo: 'E-commerce Demo',
      descripcion: 'Tienda online con carrito y pasarela de pago.',
      imagen: 'assets/proyecto2.jpg',
      tecnologias: ['Angular', 'Node.js', 'MongoDB'],
      link: 'https://midemo.com'
    },
    {
      titulo: 'Gestor de Tareas',
      descripcion: 'Aplicación web para organizar tareas diarias.',
      imagen: 'assets/proyecto3.jpg',
      tecnologias: ['React', 'Firebase'],
      link: 'https://gestortareas.com'
    }
  ];
  }

  /* TO DO: modularizar */
  MisProyectos() {

  }

}


