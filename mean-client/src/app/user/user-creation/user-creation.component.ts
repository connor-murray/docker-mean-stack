import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent {

  @Output() addUser = new EventEmitter<User>();

  name: string;
  age: number;

  constructor() {
  }

  add(): void {
    const user: User = {name: this.name, age: this.age};
    this.addUser.emit(user);
    this.reset();
  }

  private reset(): void {
    this.name = null;
    this.age = null;
  }
}
