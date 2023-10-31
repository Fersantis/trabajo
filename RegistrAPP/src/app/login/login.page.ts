import { Component } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

import { AsistenciaService } from '../asistencia.service';
import { ApiService } from './api.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],

  
})
export class LoginPage {
  inputValue: string ='';
  inputValue2: string ='';
  errorMessage: string = '';
  datos: any[] | undefined;
  state: any;

  user: any;


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


 
  constructor(
     private apiService: ApiService,
     private asistenciaService: AsistenciaService, 
     private activatedRoute: ActivatedRoute,
      private router: Router) {
      this.activatedRoute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation()?.extras.state) {
          this.state = this.router.getCurrentNavigation()?.extras.state;
          this.user = this.state.user;
          console.log(this.user);
        }
      });
    } 
    ngOnInit() {
      this.apiService.obtenerDatos().subscribe((response: any) => {
        this.datos = response;
      });
    }
    
     Ingresar() {
    this.apiService.obtenerDatos().subscribe(
      (response: any) => {
        const apiUsername = response[1].nombre;
        const apiPassword = response[1].contrasena;
        console.log(response[1].nombre);
        console.log(response[1].contrasena);
        console.log(response);
      
        // Realiza las acciones necesarias con la respuesta de la API
        // Por ejemplo, podrías almacenar los datos del usuario en una variable y pasarlos a la página de inicio
        const userInputUsername = this.inputValue;
        const userInputPassword = this.inputValue2;

      
      // Comparar los datos
      if (apiUsername === userInputUsername && apiPassword === userInputPassword) {
        // Si son iguales, hacer algo
        console.log('Los datos son iguales');
        
       
        // Realiza las acciones necesarias cuando los datos son iguales
        const userData = {
          username: apiUsername,
          password: apiPassword
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

  Recuperarcontrasena() {
    console.log('llegue');
    this.router.navigate(['/recuperar']);
  }
 
}
 