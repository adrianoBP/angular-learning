import { Injectable, signal } from '@angular/core';
import { dummyTasks } from '../../dummy-tasks';
import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal(dummyTasks);

  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.update((tasks) => [
      {
        id: new Date().getTime().toString(),
        userId: userId,
        ...taskData,
      },
      ...tasks,
    ]);
  }

  removeTask(taskId: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }
}
