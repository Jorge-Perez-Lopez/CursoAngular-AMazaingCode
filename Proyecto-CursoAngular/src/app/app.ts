import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsModule],
 templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
   userName: string = 'Jorge';
  number: number = 0;
  conditional: boolean = true;
  conditional2: string = 'Hola';

  addOne() {
    this.number++;
  }
}