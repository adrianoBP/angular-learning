import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-rect',
  imports: [],
  templateUrl: './rect.html',
  styleUrl: './rect.css',
})
export class RectComponent {
  size = model.required<{ width: string; height: string }>();

  onReset() {
    this.size.set({ width: '200', height: '100' });
  }
}
