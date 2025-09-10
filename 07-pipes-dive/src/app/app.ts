import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { SortPipe } from './pipes/sort.pipe';

@Component({
  selector: 'app-root',
  imports: [DatePipe, TemperaturePipe, SortPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  currentDate = signal(new Date());
  currentTemperatures = signal({
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  });

  historicTemperatures = signal([25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5]);

  onReset(index: number) {
    this.historicTemperatures.update((temps) => {
      const newTemps = [...temps];
      newTemps[index] = 18;
      return newTemps;
    });
  }
}
