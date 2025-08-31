import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="navbar bg-dark text-white p-3">
      <h1 class="m-0">Mi Portfolio</h1>
    </header>
  `,
  styles: [`
    header {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class Header {}
