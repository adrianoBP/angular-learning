import { Component } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task';
import { TasksListComponent } from './tasks-list/tasks-list';

@Component({
  selector: 'app-tasks',
  imports: [NewTaskComponent, TasksListComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {}
