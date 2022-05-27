import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  endpoint: string = "https:reqres.in/api/users?page"

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    let options = {};

    return this.http.get(this.endpoint , options )
  }
}
