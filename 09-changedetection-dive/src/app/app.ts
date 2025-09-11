import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Counter } from './counter/counter';
import { Message } from './messages/messages';

@Component({
  selector: 'app-root',
  imports: [Counter, Message],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }
}
