import{Component, input}from '@angular/core';

@Component({
  selector: 'app-task-item',
  template : `
  <div class="task-item">
    <label>
      <input
      type="checkbox"
      [checked]="completed()"
      (change)="onToggle()"
      />
      {{ title() }}
    </label>
  </div>
  `,
  styles: [`
    .task-item {
      padding: 0.75rem;
      border-bottom: 1px solid #eee;
    }
    input[type="checkbox"] {
      margin-right: 0.75rem;
    }
  `]
})
export class TaskItemComponent {
  title=input.required<string>();
  completed=input.required<boolean>();

  onToggle() {
    //weill be completed later
  }
}

