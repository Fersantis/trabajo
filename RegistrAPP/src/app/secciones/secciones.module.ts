import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SeccionesPage } from './secciones.page';

import { SeccionesPageRoutingModule } from './secciones-routing.module';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule,
    SeccionesPageRoutingModule
  ],
  declarations: [SeccionesPage]
})
export class SeccionesPageModule {}
