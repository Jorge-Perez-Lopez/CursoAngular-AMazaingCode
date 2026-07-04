import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { MovieListComponent } from './pages/movie-list/movie-list';
import { FormPageComponent } from './pages/form-page/form-page';
import { MovieDetailsComponent } from './pages/movie-details/movie-details';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'create', component: FormPageComponent },
  { path: 'movies/:movieName', component: MovieDetailsComponent },
];
