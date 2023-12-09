import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://database-test.cpiupqkoat0f.us-east-1.rds.amazonaws.com:3306'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  obtenerDatos() {
    return this.http.get(this.apiUrl);
  }
}