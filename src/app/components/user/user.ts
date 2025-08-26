import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();
  onSelect = output<string>();

  imagePath = computed((): string => 'assets/users/' + this.user().avatar);

  onUserSelect() {
    this.onSelect.emit(this.user().id);
  }
}
