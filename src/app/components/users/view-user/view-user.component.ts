import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private users: UsersService
  ) { }

  ngOnInit(): void {
    this.receiveParams();
  }

  receiveParams() {
    this.route.queryParams.subscribe((params: any) => {
      this.getSingleUser(params.id);
    })
  }

  getSingleUser(id: number) {
    this.users.getUser(id).subscribe(res => {
      this.user = res;
      console.log(this.user)
    })
  }

}
