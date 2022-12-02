import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service';
import { StorageService } from '../storage.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  id: number = 0;
  editMode = false;

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    age: new FormControl(null, Validators.required),
  });

  constructor(
    private dataService: DataService,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onCreateUser() {
    this.dataService.createUser(this.userForm.value);
    this.storageService.storeUsers();
    this.userForm.reset();
    this.router.navigate(['']);
  }

  onUpdate() {
    this.dataService.updateUser(this.userForm.value, this.id);
    this.storageService.storeUsers();
    this.userForm.reset();
    this.router.navigate(['']);
  }

  onDelete() {
    this.dataService.deleteUser(this.id);
    this.storageService.storeUsers();
    this.userForm.reset();
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.formInit();
    });
  }

  formInit() {
    let firstName = '';
    let lastName = '';
    let age = 0;

    if (this.editMode) {
      let user = this.dataService.getUsers()[this.id];
      firstName = user.firstName;
      lastName = user.lastName;
      age = user.age;
    }

    this.userForm = new FormGroup({
      firstName: new FormControl(firstName, Validators.required),
      lastName: new FormControl(lastName, Validators.required),
      age: new FormControl(age, Validators.required),
    });
  }
}
