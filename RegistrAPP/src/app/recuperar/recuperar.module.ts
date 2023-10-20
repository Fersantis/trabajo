import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RecuperarPage } from './recuperar.page';

import { RecuperarPageRoutingModule } from './recuperar-routing.module';

import { RouterModule, Routes } from '@angular/router';

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarPageRoutingModule
  ],
  declarations: [RecuperarPage]
})
export class RecuperarPageModule {}

