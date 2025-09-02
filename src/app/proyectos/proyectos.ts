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
      link: 'https://miportfolio.com',
      color: '#f8d7da'
    },
    {
      titulo: 'E-commerce Demo',
      descripcion: 'Tienda online con carrito y pasarela de pago.',
      imagen: 'assets/proyecto2.jpg',
      tecnologias: ['Angular', 'Node.js', 'MongoDB'],
      link: 'https://midemo.com',
      color: '#d1ecf1'
    },
    {
      titulo: 'Gestor de Tareas',
      descripcion: 'Aplicación web para organizar tareas diarias.',
      imagen: 'assets/proyecto3.jpg',
      tecnologias: ['React', 'Firebase'],
      link: 'https://gestortareas.com',
      color: '#d4edda'
    },
    {
    titulo: "TaskFlow",
    descripcion: "Aplicación web para gestionar tareas en equipo con tableros Kanban, recordatorios y exportación a PDF.",
    tecnologias: ['React', 'Node.js', 'MongoDB'],
    imagen: "img/taskflow.png",
    link: "https://taskflow.app/demo",
    color: "#4CAF50"
    },
    {
    titulo: "PixelRaiders",
    descripcion: "Videojuego arcade retro hecho en JavaScript con ranking online y sistema de logros.",
    tecnologias: ["HTML5 Canvas, JavaScript, Firebase"],
    imagen: "img/pixelraiders.png",
    link: "https://pixelraiders.io",
    color: "#FF5722"
    },
    {
    titulo: "DataVizX",
    descripcion: "Dashboard interactivo para análisis de datos financieros con gráficos dinámicos en tiempo real.",
    tecnologias: ["Vue.js, D3.js, PostgreSQL"],
    imagen: "img/datavizx.png",
    link: "https://datavizx.app",
    color: "#2196F3"
    },
    {
    titulo: "EcoShop",
    descripcion: "E-commerce sostenible con recomendaciones basadas en IA y sistema de puntos verdes por cada compra.",
    tecnologias: ["Next.js, TailwindCSS, Stripe API"],
    imagen: "img/ecoshop.png",
    link: "https://ecoshop.app",
    color: "#8BC34A"
    }
  ];
  }

  /* TO DO: modularizar */
  MisProyectos() {

  }

}


