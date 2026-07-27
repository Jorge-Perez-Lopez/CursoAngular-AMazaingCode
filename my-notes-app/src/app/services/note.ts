import { Service } from '@angular/core';
import Note from '../../models/Note';
@Service()
export class NoteService {
    notes: Note[];

    constructor() {
        this.notes = [
            {
                id: this.createId(),
                title: "Cita con el médico",
                marked: false

            },

            {
                id: this.createId(),
                title: "Contraseña del WiFi: 123456",
                marked: true

            }

        ]
    }

    createId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    };

}
