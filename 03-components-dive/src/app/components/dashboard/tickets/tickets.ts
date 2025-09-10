import { Component, signal } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket';

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class TicketsComponent {
  tickets = signal<Ticket[]>([]);

  onTicketAdded(newTicket: { title: string; request: string }) {
    const ticket: Ticket = {
      id: Math.random().toString(),
      title: newTicket.title,
      request: newTicket.request,
      status: 'open',
    };
    this.tickets.update((tickets) => [...tickets, ticket]);
  }

  onTicketClosed(id: string) {
    this.tickets.update((tickets) =>
      tickets.map((ticket) => (ticket.id === id ? { ...ticket, status: 'closed' } : ticket))
    );
  }
}
