import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-dark text-white text-center p-3 mt-auto">
      © 2025 - Jorge
    </footer>
  `,
  styles: [`
    footer {
      width: 100%;
    }
  `]
})
export class Footer {}
