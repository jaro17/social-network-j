import { Component, OnInit } from '@angular/core';
import {  UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,  Validators.minLength(6)]]
  })

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

}
