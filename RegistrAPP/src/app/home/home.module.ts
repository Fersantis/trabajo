import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { QRCodeModule } from 'angularx-qrcode';
import { HomePageRoutingModule } from './home-routing.module';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    HomePageRoutingModule,
    
  ],

  declarations: [HomePage],
  providers: [QRScanner]
})
export class HomePageModule {}

