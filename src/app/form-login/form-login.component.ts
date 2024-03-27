import { Component } from '@angular/core';

@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent {
  login = {
    email: '',
    password: '',
  };

  error = {
    email: '',
    password: '',
  };

  onSubmit() {
    console.log(this.login);
  }

  check() {
    console.log(this.login.email);
    if (this.login.email === '') {
      this.error.email = 'Campo obrigatório';
    } else if (this.login.email.indexOf('@') === -1) {
      this.error.email = 'Email inválido';
    } else {
      this.error.email = '';
    }
  }
}
