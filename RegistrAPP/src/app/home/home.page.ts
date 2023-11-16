import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AsistenciaService } from '../asistencia.service';
import { ApiService } from './api.service';
import { SafeUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    state: any;

    user: any;
  
    datos: any[] | undefined;
    qrCodeStr: any;
    constructor(private activatedRoute: ActivatedRoute, 
    
    private apiService: ApiService,private router: Router

    
    
    , private asistenciaService: AsistenciaService) {
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


  
}
