import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { MovieService } from '../../services/movie.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieListComponent {
  constructor(public movieService: MovieService) {}
}
