import { Routes } from '@angular/router';

import { HomeComponent } from
'./pages/home/home';
import { MovieListComponent } from
'./pages/movie-list/movie-list';
import { FormPageComponent } from
'./pages/form-page/form-page';

export const routes: Routes = [
  { path: '', component:
HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path:
'create', component: FormPageComponent },
];
