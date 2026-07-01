import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsModule, ChildComponent],
 templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  userName: string;
  number: number = 0;
  conditional: boolean = true;
  conditional2: string = 'Hola';
  books:  string[] = ['Hades, el dios menos malo', 'Hércules, el héroe que no quiso serlo', 'Sísifo, el hombre que engañó a la muerte'];
  animals: any = [
    {
        id: 1,
        name: "dog",
        img: "https://nypost.com/wp-content/uploads/sites/2/2023/03/dog.jpg?quality=75&strip=all&w=1024"
    },
    {
        id: 2,
        name: "cat",
        img: "https://img.freepik.com/foto-gratis/lindo-gatito-domestico_155003-16730.jpg?w=2000"
    },
    {
        id: 3,
        name: "bird",
        img: "https://media.cnn.com/api/v1/images/stellar/prod/230309163059-01-bird.jpg?q=w_800,h_450,c_fill"
    },
]

 text: String = "Variable desde el componente padre";
 person: any = {
  sex: "hombre",
  age: 20
 }
  addOne() {
    this.number++;
  }

  name: string = '';

  setName(e: any) {
    this.name = e;

  }

  constructor() {
    this.userName = 'Jorge';
  }

}