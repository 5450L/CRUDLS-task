import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { StorageService } from '../storage.service';
import { User } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  subscriptions: Subscription[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.storageService.fetchUsers();
    this.subscriptions.push(
      this.dataService.usersChanged.subscribe((users) => {
        this.users = users;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  onNewUser() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
