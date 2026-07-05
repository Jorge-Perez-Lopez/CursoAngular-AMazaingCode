import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrls: ['./child.css'],
})
export class ChildComponent {
  @Input() msg: string = '';
  @Input() person: any;

  userName: string = 'Jorge';

  @Output() login: EventEmitter<string> = new EventEmitter<string>();

  handleLogin() {
    this.login.emit(this.userName);
  }

  constructor(public productService: ProductService) {}
}
