import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recuperar',
  templateUrl: 'recuperar.page.html',
  styleUrls: ['recuperar.page.scss'],
})
export class  RecuperarPage {
  inputValue4: string ='';
  errorMessage: string = '';


  checkFieldLength() {
    if (this.inputValue4.length < 1) {
      this.errorMessage = 'Debe ingresar al menos 1 dato';
    } else {
      this.errorMessage = '';
    }
  }

  constructor(private router: Router) {
    // Constructor del componente de recuperación de contraseña
  }

  recuperarContrasena() {
    // Lógica para recuperar la contraseña
  
    // Redireccionar a la página de inicio de sesión (login)
    this.router.navigate(['login']);
  }

}

  


