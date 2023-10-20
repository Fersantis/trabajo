import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperacionPageRoutingModule } from './recuperacion-routing.module';

import { RecuperacionPage } from './recuperacion.page';

import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacionPageRoutingModule
  ],
  declarations: [RecuperacionPage]
})
export class RecuperacionPageModule {}
