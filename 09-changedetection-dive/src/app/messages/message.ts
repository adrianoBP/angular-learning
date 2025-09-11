import { Component, signal } from '@angular/core';
import { NewMessage } from './new-message/new-message';
import { MessageList } from './messages-list/messages-list';

@Component({
  selector: 'app-message',
  imports: [NewMessage, MessageList],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
})
export class Message {
  messages = signal<string[]>([]);

  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }

  onAddMessage(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }
}
