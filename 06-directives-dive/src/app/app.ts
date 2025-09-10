import { Component, computed, inject, signal } from '@angular/core';
import { AuthComponent } from './components/auth/auth';
import { LearningResourcesComponent } from './components/learning-resources/learning-resources';
import { AuthService } from './components/auth/auth.service';
import { AuthDirective } from './components/auth/auth.directive';
import { LogDirective } from './directives/log.directive';

@Component({
  selector: 'app-root',
  imports: [AuthComponent, LearningResourcesComponent, AuthDirective, LogDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private authService = inject(AuthService);
  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
