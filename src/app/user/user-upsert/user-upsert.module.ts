import { UserService } from './../user.service';
import { Component, OnInit } from "@angular/core";
import { User } from "../user.module";
import { Router } from '@angular/router';


@Component({
    selector: 'poc-user-upsert',
    templateUrl: './user-upsert.component.html',
    styleUrls: ['./user-upsert.component.scss']
})
export class userUpsert implements OnInit {
  constructor(private userService: UserService) {}


  case = 'user-upsert';
  hide = true;

  user: User = {
    name: "",
    email: "",
    description: "",
    roles: ""
  }



  ngOnInit(): void {

  }

  createUser(){
    this.userService.postUser(this.user).subscribe(user => {
      //console.log(user);
    });
  }


}
