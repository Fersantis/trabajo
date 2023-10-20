import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  
  private apiUrl = 'http://127.0.0.1:8000/'; // Reemplaza esto con la URL de tu API Django

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);
  }
  

  getDatos(): Observable<any> {
    // Realiza la solicitud HTTP utilizando el HttpClient
    // Por ejemplo, aquí se realiza una solicitud GET a una URL determinada
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<any>(apiUrl);
  }
  
}