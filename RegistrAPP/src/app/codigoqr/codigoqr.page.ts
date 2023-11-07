import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-codigoqr',
  templateUrl: 'codigoqr.page.html',
  styleUrls: ['codigoqr.page.scss'],
})
export class CodigoqrPage {

  

  constructor(private navCtrl: NavController) {}

  Generacion(){
    this.navCtrl.navigateForward(['/codiguito']);
  }
} 

  

