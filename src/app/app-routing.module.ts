import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserStartComponent } from './users/user-start/user-start.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', component: UserStartComponent },
      { path: 'new', component: UserEditComponent },
      {
        path: ':id',
        component: UserEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
