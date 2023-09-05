import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreUsuario: string;
  constructor(private route: ActivatedRoute, private modalCtrl: ModalController) {
    this.nombreUsuario = this.route.snapshot.queryParams['value'];}
    isModalOpen = false;

    setOpen(isOpen: boolean) {
      this.isModalOpen = isOpen;
    }

}
