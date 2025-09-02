import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [Card],
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
