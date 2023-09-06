import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],

  
})
export class LoginPage {
  inputValue: string ='';
  inputValue2: string ='';
  errorMessage: string = '';

  checkFieldLength() {
    if (this.inputValue.length < 1) {
      this.errorMessage = 'Debe ingresar al menos 1 dato';
    } else {
      this.errorMessage = '';
    }
  }

  shouldDisableButton(): boolean {
    return this.inputValue.length < 1 || this.inputValue2.length < 1;
  }

  checkFieldLength2() {
    if (this.inputValue2.length < 1) {
      this.errorMessage = 'Debe ingresar al menos 1 dato';
    } else {
      this.errorMessage = '';
    }
  }

  constructor(private navCtrl: NavController) {}
    Ingresar(){
    this.navCtrl.navigateForward('/home', {
      queryParams: {
        value: this.inputValue,},});

  }

  constructor(private navCtrl2: NavController) {}
    Recuperar(){
    this.navCtrl.navigateForward('/recuperar');

  }
  
 
}
