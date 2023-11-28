import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-secciones',
  templateUrl: 'secciones.page.html',
  styleUrls: ['secciones.page.scss'],
})
export class SeccionesPage {

  

  constructor(private navCtrl: NavController) {}

  Generacion(){
    this.navCtrl.navigateForward(['/codiguito']);
  }
} 

  

