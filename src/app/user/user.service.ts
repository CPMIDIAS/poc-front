import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.module';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  endpoint = 'http://api.poc-node.brasildefato.com.br/users';

  postUser(user: User): Observable<User>{
    console.log(user);
    return this.http.post<User>(this.endpoint, user, this.httpOptions);
  }
}
