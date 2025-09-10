import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class TicketComponent {
  data = input.required<Ticket>({});
  close = output<string>();

  isExpanded = signal(false);

  onExpandToggle() {
    this.isExpanded.update((isExpanded) => !isExpanded);
  }

  onClose() {
    this.close.emit(this.data().id);
  }
}
