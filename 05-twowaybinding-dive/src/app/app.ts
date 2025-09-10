import { Component, signal } from '@angular/core';
import { RectComponent } from './rect/rect';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RectComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  rectSize = signal({
    width: '100',
    height: '100',
  });
}
