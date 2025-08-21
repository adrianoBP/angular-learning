import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { User, UserComponent } from './components/user/user';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './components/tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;

  selectedUserId = signal<string | null>(null);
  selectedUser = computed((): User | undefined => {
    return this.users.find((user) => user.id === this.selectedUserId());
  });

  onUserSelect(userId: string) {
    this.selectedUserId.set(userId);
  }
}
