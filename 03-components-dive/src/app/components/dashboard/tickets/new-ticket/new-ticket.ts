import { Component, ElementRef, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button';
import { ControlComponent } from '../../../../shared/control/control';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicketComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{ title: string; request: string }>();

  submit(title: string, request: string) {
    this.add.emit({ title, request });
    this.form().nativeElement.reset();
  }
}
