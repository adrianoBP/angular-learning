import { Component, computed, input, output } from '@angular/core';

export interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  user = input.required<User>();

  onSelect = output<string>();

  imagePath = computed((): string => 'assets/users/' + this.user().avatar);

  onUserSelect() {
    this.onSelect.emit(this.user().id);
  }
}
