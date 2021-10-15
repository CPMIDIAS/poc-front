import { userUpsert } from './user-upsert/user-upsert.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';


@NgModule({
  declarations: [userUpsert],
  imports:[
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: []
})
export class UserModule {}

export interface User{
  name: string;
  email: string;
  description: string;
  roles: string;
}
