import { Component, computed, inject, signal } from '@angular/core';
import { TaskItem } from './task-item/task-item';
import { TasksService } from '../tasks.service';
import { TASK_STATUS_OPTIONS, taskStatusOptionsProvider } from '../tasks.model';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskItem],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
  providers: [taskStatusOptionsProvider],
})
export class TasksListComponent {
  private selectedFilter = signal<string>('all');
  private tasksService = inject(TasksService);

  taskStatusOptions = inject(TASK_STATUS_OPTIONS);

  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.tasksService.allTasks().filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksService.allTasks().filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService.allTasks().filter((task) => task.status === 'DONE');
      default:
        return this.tasksService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
