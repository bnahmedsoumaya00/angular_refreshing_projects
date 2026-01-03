import { Component, signal, computed, effect } from '@angular/core';
import { Task } from './task.model';
import { TaskItemComponent } from './task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent],
  template: `
    <div class="task-list">
      <h3>Tasks ({{ tasks().length }})</h3>
      <p> Completed: <strong>{{ completedCount() }}</strong></p>

      <div class="tasks">
        @for (task of tasks(); track task.id) {
          <app-task-item
            [title]="task.title"
            [completed]="task.completed"
          />
        } @empty {
          <p>No tasks yet.</p>
        }
      </div>
    </div>
  `,
  styles: [`
    .task-list {
      margin: 1.5rem 0;
    }
    .tasks {
      margin-top: 1rem;
    }
  `]
})
export class TaskListComponent {
  tasks = signal<Task[]>([
    { id: 1, title: 'Learn Angular signals', completed: true },
    { id: 2, title: 'Build task list', completed: false }
  ]);

  completedCount = computed(() => {
    return this.tasks().filter(task => task.completed).length;
  });

  constructor() {
    effect(() => {
      console.log(
        `[TaskList] Total: ${this.tasks().length}, Completed: ${this.completedCount()}`
      );
    });
  }
}
