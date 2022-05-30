import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  userForm: any = FormGroup;

  constructor(
    private users: UsersService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = new FormGroup({
      image: new FormControl(''),
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
    });
  }

  onSave() {
    console.log(this.userForm.value);

    this.users.createUsers(this.userForm.value).subscribe(res => {
      console.log(res);
    })
  }

}
