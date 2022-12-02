import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user: User | undefined;
  @Input() index: number | undefined;

  constructor() {}

  ngOnInit(): void {}
}
