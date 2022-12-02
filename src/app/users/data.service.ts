import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  usersChanged = new Subject<User[]>();
  users: User[] = [];

  getUsers() {
    return this.users.slice();
  }
  loadUsers(usersFromLs: User[]) {
    this.users = usersFromLs;
  }

  createUser(user: User) {
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }

  updateUser(user: User, index: number) {
    this.users[index] = user;
    this.usersChanged.next(this.users.slice());
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.usersChanged.next(this.users.slice());
  }
}
