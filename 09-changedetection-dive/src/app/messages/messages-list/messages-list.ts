import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  imports: [],
  templateUrl: './messages-list.html',
  styleUrl: './messages-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageList {
  private messagesService = inject(MessagesService);
  messages = this.messagesService.allMessages;
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
