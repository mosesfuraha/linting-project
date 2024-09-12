import { Component, OnInit } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserListComponent, CommonModule],
})
export class AppComponent implements OnInit {
  title = 'linting-formatting-practice';

  constructor() {}

  ngOnInit() {
    const x = 10;
    if (x === 10) {
      return x;
    }
  }

  public doSomething() {
    const y = 20;
    return y;
  }
}
