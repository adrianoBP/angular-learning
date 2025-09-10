import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  private tasksService = inject(TasksService);

  userId = input.required<string>();
  onClose = output<void>();

  selectedTitle = signal('');
  selectedSummary = signal('');
  selectedDueDate = signal('');

  cancel(): void {
    this.onClose.emit();
  }

  submit(): void {
    this.tasksService.addTask(
      {
        title: this.selectedTitle(),
        summary: this.selectedSummary(),
        dueDate: this.selectedDueDate(),
      },
      this.userId()
    );
    this.onClose.emit();
  }
}
