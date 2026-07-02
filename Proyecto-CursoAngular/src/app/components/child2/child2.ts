import { Component, input, output} from '@angular/core';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
})
export class Child2Component {
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

    constructor(public productService: ProductService) {

    }
}
