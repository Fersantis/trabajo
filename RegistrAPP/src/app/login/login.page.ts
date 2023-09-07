import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  Ingresar() {
    this.router.navigate(['/home']);
  }
  
  Recuperarcontrasena() {
    this.router.navigate(['/recuperar']);
  }


 
}
