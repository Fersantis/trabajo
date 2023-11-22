import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticateAlumno(correo: string , password: string): boolean {
   
    // En un entorno de producción, esto se haría a través de una llamada a una API
    const usuarioAlumno = 'alumno';
    const contrasenaAlumno = '123456';

    if (correo === usuarioAlumno && password === contrasenaAlumno) {
      // Autenticación exitosa
      return true;
    } else {
      // Autenticación fallida
      return false;
    }
  }
}


