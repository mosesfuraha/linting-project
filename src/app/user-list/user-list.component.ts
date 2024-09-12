import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

interface USER {
  age: number;
  name: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }} ({{ user.age }})</li>
    </ul>
  `,
  styles: [
    `
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-bottom: 10px;
      }
    `,
  ],
})
export class UserListComponent implements OnInit {
  users: USER[] = [];
  private userService = inject(UserService);

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.userService.getUsers();
  }
}
