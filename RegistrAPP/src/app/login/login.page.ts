


import { Component } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';
import { AsistenciaService } from '../asistencia.service';
import { ApiService } from '../services/api.service';

import { ActivatedRoute } from '@angular/router';
import { SafeUrl } from '@angular/platform-browser';
import { EmailComposer, EmailComposerOptions } from '@awesome-cordova-plugins/email-composer/ngx';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],

  
})

export class LoginPage {
  inputValue: string ='';
  inputValue2: string ='';
  errorMessage: string = '';
  //datos: any[] | undefined;
  state: any;
  datos: any[] | undefined;
  user: string = '';

  constructor(
    private apiService: ApiService,
    private asistenciaService: AsistenciaService, 
  
    private activatedRoute: ActivatedRoute,
    private emailComposer:EmailComposer,
    private router: Router) {

    login() {
        this.apiService.getUsers().subscribe(
          (response: any[]) => {
            const foundUser = response.find(
              (user: any) => user.nombre === this.inputValue && user.contrasena === this.inputValue2
            );
    
            if (foundUser) {
              const userData = {
                username: foundUser.nombre,
                rol: foundUser.rol,
              };
    
              const navigationExtras: NavigationExtras = {
                state: {
                  user: userData,
                },
              };
    
              this.router.navigate(['/home'], navigationExtras);
            } else {
              this.errorMessage = 'Credenciales incorrectas';
            }
          },
          error => {
            console.error('Error al obtener usuarios:', error);
            this.errorMessage = 'Error al obtener usuarios';
          }
        );
      }
    
      recuperarContrasena() {
        console.log('Ir a la página de recuperación de contraseña');
        this.router.navigate(['/recuperar']);
      }
    }
    } 
    ngOnInit() {
      this.apiService.getUsers().subscribe((response: any) => {
        this.datos = response;
      });
    }
    
    onChangeURL(url:SafeUrl) {
    
      // this.qrCodeSrc = url
    }
    async sendEmail(){
      const email: EmailComposerOptions={
        to:'geraldine.castrocc@gmail.com',
        cc:'test2@test.com',
        subject:'Test Subject send',
        body:'Hola te voy a enviar un correo'
      }
      await this.emailComposer.open(email)
    }
    
    
    Ingresar() {
      this.sendEmail()
    this.apiService.getEmail().subscribe(
      (response: any) => {
        
        const foundUser = response.find(
          user =>
            user.nombre === this.inputValue && user.contrasena === this.inputValue2
        );

        // Realiza las acciones necesarias con la respuesta de la API
        // Por ejemplo, podrías almacenar los datos del usuario en una variable y pasarlos a la página de inicio
        const userInputUsername = this.inputValue;
        const userInputPassword = this.inputValue2;

      
      // Comparar los datos
      if (apiUsername === userInputUsername && apiPassword === userInputPassword) {
        // Resto del código...
      }
      
        // Si son iguales, hacer algo
        console.log('Los datos son iguales');
        
       
        // Realiza las acciones necesarias cuando los datos son iguales
        const userData = {
          username: apiUsername,
          password: apiPassword,
          rol:apirol
          // Puedes agregar más propiedades según la respuesta de la API
        };
        const navigationExtras: NavigationExtras = {
          state: {
            user: userData,
          },
        };

        this.router.navigate(['/home'], navigationExtras);

      } else {
        // Si son diferentes, hacer otra cosa
        
        console.log('Los datos son diferentes');
          // Maneja el caso cuando los datos no son iguales (por ejemplo, muestra un mensaje de error al usuario)
          this.errorMessage = 'Los datos ingresados son incorrectos';
      }
    },
    (error) => {
      console.error(error);
      // Maneja el error de la solicitud a la API
    }
  );
      
  }



