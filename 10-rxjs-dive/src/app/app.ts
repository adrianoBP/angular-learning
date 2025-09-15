import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);
  intervalValue = signal(0);
  customValue = signal(0);

  customInterval$ = new Observable((subscriber) => {
    let executedTimes = 0;
    const intervalId = setInterval(() => {
      if (executedTimes >= 3) {
        clearInterval(intervalId);
        subscriber.complete();
        return;
      }

      console.log('Emitting new value');
      subscriber.next({ timesExecuted: ++executedTimes });
    }, 2000);

    this.destroyRef.onDestroy(() => clearInterval(intervalId));
  });

  constructor() {
    effect(() => {
      console.log(`Button clicked ${this.clickCount()} times`);
    });
  }

  ngOnInit(): void {
    const intervalSubscription = interval(1000)
      .pipe(map((value) => value * 2))
      .subscribe((value) => this.intervalValue.set(value));

    const customSubscription = this.customInterval$.subscribe({
      next: (value) => {
        this.customValue.set((value as { timesExecuted: number }).timesExecuted);
      },
      complete: () => console.log('Custom Observable completed'),
    });

    // Clean up subscriptions on destroy
    this.destroyRef.onDestroy(() => {
      intervalSubscription.unsubscribe();
      customSubscription.unsubscribe();
    });
  }

  click() {
    this.clickCount.update((count) => count + 1);
  }
}
