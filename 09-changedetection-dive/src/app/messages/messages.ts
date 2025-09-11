import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NewMessage } from './new-message/new-message';
import { MessageList } from './messages-list/messages-list';

@Component({
  selector: 'app-messages',
  imports: [NewMessage, MessageList],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Message {
  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }
}
