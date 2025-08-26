import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from './task/task';
import { dummyTasks } from '../../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  id = input.required<string>();
  name = input.required<string>();
  tasks = signal(dummyTasks);

  selectedUserTasks = computed(() => this.tasks().filter((task) => task.userId === this.id()));

  onCompleteTask(id: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== id));
  }
}
