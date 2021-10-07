import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  endpoint = 'http://api.poc-node.brasildefato.com.br';

  getAll() {
    return this.http.get(`${this.endpoint}/users`, { responseType: 'json' }).subscribe();
  }
}
