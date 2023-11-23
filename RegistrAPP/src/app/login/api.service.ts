import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:5000/asistencias'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  obtenerDatos(param1: string, param2: string) {
    const params = new HttpParams()
    .set('correo', param1)
    .set('contrasena',param2);

    return this.http.get(this.apiUrl,{ params });
  }
  

}