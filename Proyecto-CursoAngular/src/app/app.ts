import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  constructor() {

    console.log('Dentro del constructor');

  }

  ngOnInit(): void {
    console.log('Dentro del ngOnInit');
  }
}