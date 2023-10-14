import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';

import { AsistenciaService } from '../asistencia.service';

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



  constructor(private navCtrl: NavController, private asistenciaService: AsistenciaService) {}
  Ingresar() {
    this.asistenciaService.getDatos().subscribe(
      (response) => {
        console.log(response);
        // Realiza las acciones necesarias con la respuesta de la API
        // Por ejemplo, podrías almacenar los datos del usuario en una variable y pasarlos a la página de inicio
        const userData = {
          username: this.inputValue,
          password: this.inputValue2,
          // Puedes agregar más propiedades según la respuesta de la API
        };
        this.navCtrl.navigateForward('/home', {
          state: { user: userData }
        });
      },
      (error) => {
        console.error(error);
        // Maneja el error de la solicitud a la API
      }
    );
  }
  Recuperarcontrasena() {
    this.navCtrl.navigateForward(['/recuperar']);
  }
 
}
