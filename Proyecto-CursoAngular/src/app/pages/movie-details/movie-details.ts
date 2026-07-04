import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header";
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import Movie from '../../models/Movie';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetailsComponent {
  selectedMovie?: Movie;
  constructor(private route: ActivatedRoute, private movieService: MovieService) { 
    const movieName = route.snapshot.params['movieName'];
    console.log(movieName);
    this.selectedMovie = movieService.getMovie(movieName);
  }
}
