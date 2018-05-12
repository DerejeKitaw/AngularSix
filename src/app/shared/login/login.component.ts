import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loading = false;
userName: string;
password: string;
formLogin: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      userName: [this.userName, [Validators.required, Validators.minLength(3)]],
      password: [this.password, [Validators.required]]
    });
  }
  onLogin() {
    console.log(this.formLogin);
    console.log(this.userName);
  }
}
