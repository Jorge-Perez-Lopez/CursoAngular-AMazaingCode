import { Component, input } from '@angular/core';
import Note from '../../../models/Note';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [],
  templateUrl: './note-card.html',
  styleUrl: './note-card.css',
})
export class NoteCard {
  
  note = input <Note>();
  }