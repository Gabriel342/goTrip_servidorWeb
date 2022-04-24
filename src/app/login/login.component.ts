import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Você deve inserir um e-mail valido';
    }

    return this.email.hasError('email') ? 'Não é um e-mail valido' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
