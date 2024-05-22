import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './Services/user.service';
import { NgFor } from '@angular/common';
import { AdduserComponent } from "./adduser/adduser.component";
import { LoggerService } from './Services/logger.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [UserService],
    imports: [RouterOutlet, NgFor, AdduserComponent]
})
export class AppComponent implements OnInit {
  title = 'UserService';

  constructor(private userService: UserService){

  }

  users: {name: string, status: string}[] = [];

  ngOnInit(){
    this.users = this.userService.users;
  }
}
