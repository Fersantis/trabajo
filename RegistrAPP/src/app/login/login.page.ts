import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AsistenciaService } from '../asistencia.service';
//import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

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
      
    }
      
    Ingresar() {
      
    this.apiService.obtenerDatos(this.inputValue,this.inputValue2).subscribe(
      (response: any) => {
        const apiUsername = response[0].correo;
        const apiPassword = response[0].contrasena;
        const apirol = response[0].rol;
        console.log(response[0].correo);
        console.log(response[0].contrasena);
        console.log(response);
        console.log(this.inputValue);
        console.log(this.inputValue2);
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
          password: apiPassword,
          rol:apirol
       
        };
        const navigationExtras: NavigationExtras = {
          state: {
            user: userData,
          },
        };

        this.router.navigate(['/home'], navigationExtras).then(
          () => console.log('Redirección exitosa'),
          (error) => console.error('Error en la redirección:', error)
        );

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
