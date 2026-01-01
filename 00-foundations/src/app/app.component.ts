import { Component } from '@angular/core';
import { HelloComponent } from './hello.component'; // ← import it

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent], // ← register it here (standalone style)
  template: `
    <main class="app">
      <h1>Angular 19 Learning — Day 1</h1>
      <app-hello></app-hello>  <!-- ← use it -->
    </main>
  `,
  styles: [`
    .app {
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1rem;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.6;
    }
    h1 {
      color: #3f51b5;
      text-align: center;
    }
  `]
})
export class AppComponent {}
