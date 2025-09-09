import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatusComponent implements OnInit {
  status = signal<'online' | 'offline' | 'unknown'>('online');

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const randomValue = Math.random();
      if (randomValue < 0.5) this.status.set('online');
      else if (randomValue < 0.9) this.status.set('offline');
      else this.status.set('unknown');
    }, 5000);
  }
}
