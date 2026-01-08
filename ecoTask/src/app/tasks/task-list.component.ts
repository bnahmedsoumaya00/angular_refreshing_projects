import { Component, signal, computed, effect } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ← ADD THIS
import { Task } from './task.model';
import { TaskItemComponent } from './task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, FormsModule], // ← ADD FormsModule HERE
  template: `
    <div class="task-list">
      <h3>Tasks ({{ tasks().length }})</h3>
      <p>✅ Completed: <strong>{{ completedCount() }}</strong></p>

      <!-- 🔹 New: Task creation form -->
      <form (ngSubmit)="addTaskFromForm()" #taskForm="ngForm" class="add-form">
        <input
          type="text"
          [(ngModel)]="newTaskTitle"
          name="title"
          placeholder="Enter a new task..."
          required
          #titleInput="ngModel"
          [disabled]="!newTaskTitle.trim()"
          class="task-input"
        />
        <button
          type="submit"
          [disabled]="!newTaskTitle.trim()"
          class="add-btn"
        >
          ➕ Add
        </button>
      </form>

      <div class="tasks">
        @for (task of tasks(); track task.id) {
          <app-task-item
            [id]="task.id"
            [title]="task.title"
            [completed]="task.completed"
            (toggle)="onTaskToggle($event)"
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
    .add-form {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    .task-input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .add-btn {
      padding: 0.5rem 1rem;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .add-btn:disabled {
      background: #cccccc;
      cursor: not-allowed;
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

  // 🔹 For form input
  newTaskTitle = '';

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

  // 🔹 Handle toggle from child
  onTaskToggle(event: { id: number; completed: boolean }) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === event.id ? { ...task, completed: event.completed } : task
      )
    );
  }

  // 🔹 Add task from form
  addTaskFromForm() {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle.trim(),
        completed: false
      };
      this.tasks.update(tasks => [...tasks, newTask]);
      this.newTaskTitle = ''; // reset input
    }
  }
}
