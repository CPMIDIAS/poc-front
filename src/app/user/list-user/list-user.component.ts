import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poc-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  constructor(private readonly userService: UserService) {}

  users: any;

  ngOnInit(): void {
    this.users = this.userService.getAll();
  }


  title = 'Listagem de Usuários';
}
