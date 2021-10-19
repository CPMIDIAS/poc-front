import { ErrorDialogService } from './../../error-dialog/errordialog.service';
import { UserService } from '../user.service';
import { Component, OnInit } from "@angular/core";
import { User } from '../../models/user';

@Component({
    selector: 'poc-user-upsert',
    templateUrl: './user-upsert.component.html',
    styleUrls: ['./user-upsert.component.scss']
})
export class UserUpsertComponent {
  constructor(private userService: UserService, private errorDialog: ErrorDialogService) {}
  case = 'user-upsert';
  hide = true;
  user: User = {
    name: '',
    email: '',
    password: '',
  }
  createUser(user: User){
    this.userService.PostUser(user).subscribe(user => {
      this.errorDialog.OpenDialog({reason: 'Usuário gravado com sucesso!', status:200});
      window.location.reload()
    });
  }
}
