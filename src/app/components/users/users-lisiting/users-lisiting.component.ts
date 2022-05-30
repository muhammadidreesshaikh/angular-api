import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-lisiting',
  templateUrl: './users-lisiting.component.html',
  styleUrls: ['./users-lisiting.component.scss']
})
export class UsersLisitingComponent implements OnInit {

  listing: any = [];
  user : any = {};

  constructor(
    private users: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsersListing();
  }

  getUsersListing() {
    this.users.getUsers().subscribe(res => {
      this.listing = res;
      console.log(this.listing);
    })
  }

  getSingleUser(id : number) {
    this.users.getUser(id).subscribe(res => {
      this.user = res;
      console.log(this.user);
    })
  }

}
