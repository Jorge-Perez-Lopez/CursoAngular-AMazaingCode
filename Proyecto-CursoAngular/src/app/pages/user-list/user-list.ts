import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HeaderComponent } from '../../components/header/header';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserListComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();    
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.userService.users = data;        
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }
}
