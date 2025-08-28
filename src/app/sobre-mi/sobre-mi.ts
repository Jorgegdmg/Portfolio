/** import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [NgModule],
  templateUrl: './sobre-mi.html',
  styleUrls: ['./sobre-mi.css'],
})
export class SobreMi {}

**/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor, *ngIf

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule], // 👈 Aquí lo añadimos
  templateUrl: './sobre-mi.html',
  styleUrls: ['./sobre-mi.css'],
})
export class SobreMi {

  skills: any[] = []

}
