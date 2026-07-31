import { Service } from '@angular/core';
import Note from '../../models/Note';
import { HttpClient } from '@angular/common/http';

export class NoteService {

    readonly API_URL= "https://ca201119f4f919685321.free.beeceptor.com";
    notes: Note[];

    constructor(private http: HttpClient) {
        this.notes = []
    }

    getNotes() {
        return this.http.get<Note[]>(this.API_URL);
    }

    updateTitle(id: string, newTitle: string) {
        const updatedNote = this.notes.find((note) => note.id === id);

        if(!updatedNote) return;

        updatedNote.title = newTitle;
    }

    updateMarked(id: string) {
        const updatedNote = this.notes.find((note) => note.id === id);

        if(!updatedNote) return;

        updatedNote.marked = !updatedNote.marked;
    }

    createNote(note: Note) {
        return this.http.post<Note>(this.API_URL, note);
    }

    createId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    };

}
