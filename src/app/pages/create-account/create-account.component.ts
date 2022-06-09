import { Component, OnInit } from '@angular/core';
import {  UntypedFormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private fb: UntypedFormBuilder, public userService: UserService) { }

  ngOnInit(): void {
  }

  createAccountForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required,  Validators.maxLength(10)]],
    password: ['', [Validators.required,  Validators.minLength(6)]]
  })

  get email() { return this.createAccountForm.get('email') }
  get username() { return this.createAccountForm.get('username') }
  get password() { return this.createAccountForm.get('password') }

  create() {
    this.userService.createNewUser(this.createAccountForm.value).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

}
