import { Component } from '@angular/core';

@Component({
  selector: 'switch-panel',
  templateUrl: './switch-panel.component.html',
  styleUrls: ['./switch-panel.component.scss'],
})
export class SwitchPanelComponent {
  toggleSections() {
    const switchLogin = document.querySelector('.switch-login');
    const switchRegister = document.querySelector('.switch-register');
    const toLogin = document.querySelector('.to-login');
    const toRegister = document.querySelector('.to-register');

    if (!switchLogin || !switchRegister || !toLogin || !toRegister) {
      return;
    }

    switchLogin.classList.toggle('disabled');
    switchRegister.classList.toggle('disabled');
    toLogin.classList.toggle('delay-height');
    toRegister.classList.toggle('delay-height');
  }
}
