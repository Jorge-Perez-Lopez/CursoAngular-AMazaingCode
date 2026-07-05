import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { UserListComponent } from './pages/user-list/user-list';
import { UserDetailComponent } from './pages/user-detail/user-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent },
];
