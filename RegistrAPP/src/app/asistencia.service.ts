import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  
 

  constructor(private http: HttpClient) { }

  

  getDatos(): Observable<any> {
    // Realiza la solicitud HTTP utilizando el HttpClient
    // Por ejemplo, aquí se realiza una solicitud GET a una URL determinada
    const apiUrl = 'https://database-test.cpiupqkoat0f.us-east-1.rds.amazonaws.com:3306/asistencia_duoc';
    return this.http.get<any>(apiUrl);
  }
  
}