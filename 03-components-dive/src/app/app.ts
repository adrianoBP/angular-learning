import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { ServerStatusComponent } from './components/dashboard/server-status/server-status';
import { TrafficComponent } from './components/dashboard/traffic/traffic';
import { TicketsComponent } from './components/dashboard/tickets/tickets';
import { DashboardItem } from './components/dashboard/dashboard-item/dashboard-item';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItem,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
