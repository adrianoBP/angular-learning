import { Component, signal } from '@angular/core';
import { TasksComponent } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('08-dependencyinjection-dive');
}
