import { Component, computed, inject, input, signal } from '@angular/core';
import { TaskComponent } from './task/task';
import { dummyTasks } from '../../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  private tasksService = inject(TasksService);

  userId = input.required<string>();
  name = input.required<string>();

  isAddingTask = signal(false);
  tasks = signal(dummyTasks);

  selectedUserTasks = computed(() => this.tasksService.getUserTasks(this.userId()));

  onStartAddTask(): void {
    this.isAddingTask.set(true);
  }

  onCloseAddTask(): void {
    this.isAddingTask.set(false);
  }
}
