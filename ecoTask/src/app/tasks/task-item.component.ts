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
    }
    input[type="checkbox"] {
      margin-right: 0.75rem;
    }
  `]
})
export class TaskItemComponent {
  title = input.required<string>();
  completed = input.required<boolean>();

  // 🔹 Prepare for Day 4: output event (not wired yet)
  toggle = output<{ id: number; completed: boolean }>();

  onToggle() {
    // 🟡 Not implemented today — will emit event in Day 4
    // For now: console log to confirm click works
    console.log('[TaskItem] Toggle clicked — will emit in Day 4');
  }
}
