import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {IUser} from '../interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: IUser = {
    userName: '',
    password: ''
  };
  loading = false;
  userName: string;
  password: string;
  formLogin: FormGroup;
  formError: { [id: string]: string };
  private validationMessages: { [id: string]: { [id: string]: string } };

  constructor(private fb: FormBuilder) {
    this.formError = {
      userName: '',
      password: ''
    };
  }

  ngOnInit() {
    this.formLogin = this.fb.group({
      userName: [this.userName, [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
      password: [this.password, [Validators.required]]
    });
  }
  onLogin(): void {
    if (!this.formLogin.invalid) {
      this.doLogin();
    }
}

  onValueChanged(data: any): void {
    for (const field in this.formError) {
        if (this.formError.hasOwnProperty(field)) {
            const hasError = this.formLogin.controls[field].dirty &&
                !this.formLogin.controls[field].valid;
            this.formError[field] = '';
            if (hasError) {
                for (const key in this.formLogin.controls[field].errors) {
                    if (this.formLogin.controls[field].errors.hasOwnProperty(key)) {
                        this.formError[field] += this.validationMessages[field][key] + ' ';
                    }
                }
            }
        }
    }
  }
  doLogin() {
    this.loading = true;
    console.log(this.userName);
  }
}
