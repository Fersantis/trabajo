import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8101/asistencias'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  obtenerDatos() {
    return this.http.get(this.apiUrl);
  }
}