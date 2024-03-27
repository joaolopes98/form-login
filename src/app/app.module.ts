import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchPanelComponent } from './switch-panel/switch-panel.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormsModule } from '@angular/forms';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  declarations: [AppComponent, SwitchPanelComponent, FormLoginComponent, CustomInputComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
