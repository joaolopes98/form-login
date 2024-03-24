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

  onSubmit() {
    console.log(this.login);
  }
}
