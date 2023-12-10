import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailComposer, EmailComposerOptions } from '@awesome-cordova-plugins/email-composer/ngx';

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

  constructor(
    private router: Router,
    private emailComposer:EmailComposer,) {
    // Constructor del componente de recuperación de contraseña

  }

  recuperarContrasena() {
    // Lógica para recuperar la contraseña
    const subject = 'Test Subject';
    const body = 'Test Body';
    this.sendEmail(this.inputValue4,body,subject)
    // Redireccionar a la página de inicio de sesión (login)
    //this.router.navigate(['login']);
  }
  ngOnInit() {
    /*this.sendEmail(
      "test@gmail.com",
      "este es un correo de recuperación de contraseña",
      "recuperación de contraseña"

    )*/
  }

  async sendEmail(emailSend:string, body:string, subject:string){
      
    const email: EmailComposerOptions={
      to:emailSend,
      subject:subject,
      body:body
    }
    await this.emailComposer.open(email).then(() => {
      console.log('Correo abierto correctamente');
    }).catch(error => {
      console.error('Error al abrir el correo', error);
    });
  }
}

  


