import { Component, input, output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class ChildComponent {
    // @Input() msg: String = '';
    msg = input<String>('');

   // @Input()
   // person: any

   person = input<any>();

   userName: string = 'Jorge';

  // @Output() login: EventEmitter<string> = new EventEmitter<string>();

  login = output<any>();

   handleLogin() {
    this.login.emit(this.userName);
    }
}
