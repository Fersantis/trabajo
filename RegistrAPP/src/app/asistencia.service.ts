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
    const apiUrl = 'http://localhost:5000/asistencias';
    return this.http.get<any>(apiUrl);
  }
  
}