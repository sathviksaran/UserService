import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css',
  //providers: [UserService]
})
export class AdduserComponent {

  username: string = '';
  status: string = 'active';

  constructor(private userService: UserService){

  }

  AddUser(){
    this.userService.AddNewUser(this.username, this.status);
    console.log(this.userService.users);
  }
}
