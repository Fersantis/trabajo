import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CodigoqrPage } from './codigoqr.page';

import { CodigoqrPageRoutingModule } from './codigoqr-routing.module';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule,
    CodigoqrPageRoutingModule
  ],
  declarations: [CodigoqrPage]
})
export class CodigoqrPageModule {}
