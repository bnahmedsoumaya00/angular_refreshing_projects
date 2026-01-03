import { Component } from '@angular/core';
import { HelloComponent } from './core/hello.component'; // ← import it
import { TaskListComponent } from './tasks/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent, TaskListComponent], // ← register it here (standalone style)
  template: `
    <main class="app">
      <h1>Angular 19 Learning — Day 1</h1>
      <app-hello />
      <app-task-list />
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
