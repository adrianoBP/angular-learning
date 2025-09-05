import { Component, computed, signal } from '@angular/core';
@Component({
  selector: 'app-traffic',
  imports: [],
  templateUrl: './traffic.html',
  styleUrl: './traffic.css',
})
export class TrafficComponent {
  trafficData = signal([
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ]);

  maxTraffic = computed(() => {
    return Math.max(...this.trafficData().map((data) => data.value));
  });
}
