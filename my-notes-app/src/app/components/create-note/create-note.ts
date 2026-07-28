import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Note from '../../../models/Note';
import { NoteService } from '../../services/note';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-note.html',
  styleUrl: './create-note.css',
})
export class CreateNote {
  noteTitle: string = '';

  constructor(public noteService: NoteService) {}

  handleSubmit = () => {

    if(!this.noteTitle) return;

    const newNote: Note = {
      id: this.noteService.createId(),
      title: this.noteTitle,
      marked: false
    }

    this.noteService.createNote(newNote);
    this.noteTitle = '';
  }
}
