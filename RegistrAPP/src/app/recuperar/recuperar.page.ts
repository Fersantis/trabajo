import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-recuperar',
  templateUrl: 'recuperar.page.html',
  styleUrls: ['recuperar.page.scss'],
})
export class  RecuperarPage {
  inputValue: string ='';
  errorMessage: string = '';


  checkFieldLength() {
    if (this.inputValue.length < 1) {
      this.errorMessage = 'Debe ingresar al menos 1 dato';
    } else {
      this.errorMessage = '';
    }
  }

  shouldDisableButton(): boolean {
    return this.inputValue.length < 1;
  }

  constructor(private navCtrl: NavController) {}
  recuperar(){
  this.navCtrl.navigateForward('/login');

}

    }


