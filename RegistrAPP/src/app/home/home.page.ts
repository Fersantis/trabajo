import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistenciaService } from '../asistencia.service';
import { ApiService } from '../services/api.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    state: any;

    user: any;

    showQr:any;
    teacher: any;
  
    datos: any[] | undefined;
    qrCodeStr: any;
    constructor(private activatedRoute: ActivatedRoute, 
    
    private apiService: ApiService,private router: Router,
    private barcodeScanner: BarcodeScanner,
    
    private asistenciaService: AsistenciaService) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.state = this.router.getCurrentNavigation()?.extras.state;
        this.user = this.state.user;
        console.log(this.user);
        if (this.user.rol=="alumno"){
    
          this.scanCode()
          //
      } else{
          this.teacher= true
      }

      }
    });
  } 
  GenerarQR(){
    this.showQr=true;
  }

  scanCode() { // desplige de la camara alumno
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Código escaneado:', barcodeData);
      //alert('Código escaneado: ' + barcodeData.text);
    }).catch(err => {
      console.error('Error al escanear el código de barras', err);
    });
  }
  ngOnInit() {
    this.apiService.getEmail().subscribe((response: any) => {
      this.datos = response;
    });
  }
  
}
