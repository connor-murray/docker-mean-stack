import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {User} from "../models/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnChanges {

  @Input() users: MatTableDataSource<User>;

  displayedColumns = ['name', 'age'];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.users.currentValue) {
      this.users = new MatTableDataSource(changes.users.currentValue);
    }
  }
}
