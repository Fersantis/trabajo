import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-profesor',
  templateUrl: 'profesor.page.html',
  styleUrls: ['profesor.page.scss'],
})
export class ProfesorPage {

  inputValue2: string ='';
  datos: any[] | undefined;
  state: any;

  user: any;

  constructor(private navCtrl: NavController) {}

  Generarcodigo(){
    this.navCtrl.navigateForward(['/secciones']);
  }

}
