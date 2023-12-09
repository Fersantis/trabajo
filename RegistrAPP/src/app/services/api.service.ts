import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://stsxxdw5-5000.brs.devtunnels.ms/';

  constructor(private http: HttpClient) {}

  getEmail(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/asistencia_duoc/usuario/correo`);
  }
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/asistencia_duoc/${id}`);
    
  }
  getPassword(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/asistencia_duoc/usuario/contrasena/${id}`);
  }
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/asistencia_duoc/usuario`);
  }
}
