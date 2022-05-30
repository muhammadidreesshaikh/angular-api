import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  endpoint: string = "https:reqres.in/api/users"

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    let options = {};

    return this.http.get(this.endpoint , options)
  }

  getUser(id: number) {
    let options = {};

    return this.http.get(`${this.endpoint}/${id}`, options)
  }

  createUsers(data: any) {
    let options = {};

    return this.http.post(this.endpoint, data, options)
  }
}
