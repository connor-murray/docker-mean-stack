import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user.model";
import {Subscription} from "rxjs/Subscription";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import {NotificationService} from "../../shared/services/notification.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService, private notificationService: NotificationService) {
  }

  users: User[];

  private addUserSubscription: Subscription;
  private getUsersSubscription: Subscription;

  ngOnInit() {
    const userInterval$ = Observable.interval(3000).startWith(0).switchMap(() => this.userService.getUsers());
    this.getUsersSubscription = userInterval$.subscribe(response => {
      this.users = response;
    });
  }

  ngOnDestroy() {
    if (this.addUserSubscription) {
      this.addUserSubscription.unsubscribe();
    }
    if (this.getUsersSubscription) {
      this.getUsersSubscription.unsubscribe();
    }
  }

  addUser(user: User): void {
    this.addUserSubscription = this.userService.addUser(user).subscribe(
      () => {
        this.notificationService.success('User Created');
      },
      () => {
        this.notificationService.error('User Creation Error');
      }
    );
  }
}
