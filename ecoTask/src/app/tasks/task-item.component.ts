import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  template: `
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
      display: flex;
      align-items: center;
    }
    input[type="checkbox"] {
      margin-right: 0.75rem;
    }
  `]
})
export class TaskItemComponent {
  id = input.required<number>();
  title = input.required<string>();
  completed = input.required<boolean>();

  // 🔹 Output event: emits when checkbox changes
  toggle = output<{ id: number; completed: boolean }>();

  onToggle() {
    // Emit new state to parent
    this.toggle.emit({
      id: this.id(),
      completed: !this.completed()
    });
  }
}
