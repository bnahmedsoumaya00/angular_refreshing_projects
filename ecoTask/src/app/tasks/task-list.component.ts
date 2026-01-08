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
      <p>✅ Completed: <strong>{{ completedCount() }}</strong></p>

      <button (click)="addTask()" class="add-btn">
        ➕ Add Task
      </button>

      <div class="tasks">
        @for (task of tasks(); track task.id) {
          <app-task-item
            [title]="task.title"
            [completed]="task.completed"
          />
        } @empty {
          <div class="empty-state">
            <p>📭 No tasks yet.</p>
            <p>Add your first task above!</p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .task-list {
      margin: 1.5rem 0;
    }
    .add-btn {
      padding: 0.5rem 1rem;
      background: #2196F3;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 1rem;
    }
    .tasks {
      margin-top: 1rem;
      border: 1px solid #eee;
      border-radius: 4px;
      overflow: hidden;
    }
    .empty-state {
      padding: 2rem;
      text-align: center;
      color: #757575;
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

  // 🔹 New: Add task with unique ID
  addTask() {
    const newTask: Task = {
      id: Date.now(), // ✅ stable, unique ID (better than increment)
      title: `Task ${this.tasks().length + 1}`,
      completed: false
    };
    // ✅ Immutable update: create new array
    this.tasks.update(tasks => [...tasks, newTask]);
  }
}
