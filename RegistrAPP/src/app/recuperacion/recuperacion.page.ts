import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage {
  inputValue4: string ='';
  errorMessage: string = '';

  checkFieldLength() {
    if (this.inputValue4.length < 1) {
      this.errorMessage = 'Debe ingresar al menos 1 dato';
    } else {
      this.errorMessage = '';
    }
  }


  constructor(private router: Router) { }

  recuperarContrasena() {
    // Lógica para recuperar la contraseña
  
    // Redireccionar a la página de inicio de sesión (login)
    this.router.navigate(['login']);
  }

}
