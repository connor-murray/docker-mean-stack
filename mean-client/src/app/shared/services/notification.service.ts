import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Injectable()
export class NotificationService {

  private duration: number = 2000;

  constructor(private snackBar: MatSnackBar) {
  }

  success(message: string) {
    this.notify(message, 'Success');
  }

  error(message: string) {
    this.notify(message, 'Error');
  }

  notify(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: this.duration,
    });
  }
}
