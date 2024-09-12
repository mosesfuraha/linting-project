import { Component, OnInit } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { LintingFormattingComponent } from './linting-formatting/linting-formatting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserListComponent, CommonModule, LintingFormattingComponent],
})
export class AppComponent implements OnInit {
  title = 'linting-formatting-practice';

  constructor() {}

  ngOnInit() {
    const x = 10;
    if (x === 10) {
      this.performAction();
    }
  }

  public doSomething() {
    const y = 20;
    return y;
  }

  private performAction() {}
}
