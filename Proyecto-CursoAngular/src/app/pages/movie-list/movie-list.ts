import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieListComponent {
  constructor(public movieService: MovieService) {}
}
