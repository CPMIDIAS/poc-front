import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }
  endpoint = 'http://api.poc-node.brasildefato.com.br/authentication/register';

  PostUser(user: User): Observable<User>{
    console.log("*********************************", user);
    return this.http.post<User>(this.endpoint, user);
  }
}
