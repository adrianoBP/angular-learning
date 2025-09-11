import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './tasks.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const { title, description } = taskData;

    const newTask: Task = {
      id: Math.random().toString(),
      status: 'OPEN',
      ...taskData,
    };

    this.tasks.update((tasks) => [...tasks, newTask]);
    this.loggingService.log(`Task added: ${newTask.id}`);
  }

  updateTaskStatus(id: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task))
    );
    this.loggingService.log(`Task status updated: ${id}, new status: ${newStatus}`);
  }
}
