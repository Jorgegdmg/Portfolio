import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
})
export class Contacto {
  email: string = 'jorgegmgdeveloper@gmail.com'; 

  copiarEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      alert('Correo copiado al portapapeles ✅');
    }).catch(err => {
      console.error('Error al copiar: ', err);
    });
  }

  enviarCorreo() {
    window.location.href = `mailto:${this.email}`;
  }
}
