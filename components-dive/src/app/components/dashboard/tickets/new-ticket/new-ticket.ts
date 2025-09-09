import { Component, ElementRef, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button';
import { ControlComponent } from '../../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicketComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  submit(title: string, request: string) {
    console.log('Title:', title);
    console.log('Request:', request);
    this.form().nativeElement.reset();
  }
}
