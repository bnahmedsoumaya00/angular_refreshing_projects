import { Component, signal } from "@angular/core";
@Component({
  selector: 'app-hello',
  template: `
  <div class="hello-card">
    <h2>Hello, {{ name() }}!</h2>

    @if (showGreeting()){
      <p>Welcome to Angular {{version}} learning.</p>
    } @else{
    <p>Click "show Greeting" to continue. </p>
    }
    <button (click)="toggleGreeting()">
      {{showGreeting()? 'Hide' : 'Show'}} Greeting
    </button>
  </div>
`,
styles: [`
    .hello-card {
      padding: 1.5rem;
      border: 2px solid #4CAF50;
      border-radius: 12px;
      background: #f8fff8;
      margin: 1.5rem 0;
      text-align: center;
    }
    button {
      margin-top: 1rem;
      padding: 0.5rem 1.5rem;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    button:hover {
      background: #45a049;
    }
  `]
})
export class HelloComponent {
  //reactive state variables (replaces componenet class properties)
  name = signal('Soumaya');
  showGreeting = signal(false);
  version = '19';

  //updates signal state
  toggleGreeting() {
    this.showGreeting.update(prev => !prev);
  }
}
