import { Component, input, output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  task = input.required<Task>();
  onComplete = output<string>();

  completeTask() {
    this.onComplete.emit(this.task().id);
  }
}
