import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {User} from "../models/user.model";

@Injectable()
export class UserService {

  private apiUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/user`, user);
  }

  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/users`);
  }
}
