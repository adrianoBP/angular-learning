import { Component, signal } from '@angular/core';
import { LifecycleComponent } from './lifecycle/lifecycle';

@Component({
  selector: 'app-root',
  imports: [LifecycleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  lifecycleComponentIsVisible = signal(false);
  lifecycleInputText = signal('Some Random Number: ' + Math.random() * 100);

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible.set(!this.lifecycleComponentIsVisible());
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText.set('Some Random Number: ' + Math.random() * 100);
  }
}
