import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { MovieFormComponent } from '../../components/movie-form/movie-form';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [HeaderComponent, MovieFormComponent],
  templateUrl: './form-page.html',
  styleUrls: ['./form-page.css']
})
export class FormPageComponent {
}
