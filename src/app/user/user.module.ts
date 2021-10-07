import { UserService } from './user.service';
import { ListUserComponent } from './list-user/list-user.component';
import { CardUserComponent } from './card-user/card-user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CardUserComponent, ListUserComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
})
export class UserModule {}
