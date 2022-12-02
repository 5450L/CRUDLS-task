import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private dataService: DataService) {}

  fetchUsers() {
    this.dataService.users = JSON.parse(localStorage.getItem('Users') || '{}');
    console.log(localStorage);
  }

  storeUsers() {
    localStorage.clear();
    localStorage.setItem(`Users`, JSON.stringify(this.dataService.getUsers()));
    console.log(localStorage);
  }
}
