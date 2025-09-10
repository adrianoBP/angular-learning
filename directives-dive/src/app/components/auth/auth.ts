import { Component, inject, signal } from '@angular/core';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { LogDirective } from '../../directives/log.directive';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
  hostDirectives: [LogDirective],
})
export class AuthComponent {
  email = signal('');
  password = signal('');
  private authService = inject(AuthService);

  onSubmit() {
    this.authService.authenticate(this.email(), this.password());
  }
}
