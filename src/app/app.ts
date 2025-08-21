import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { User } from './components/user/user';

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-learning');
}
