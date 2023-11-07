import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CodiguitoPage } from './codiguito.page';

import { CodiguitoPageRoutingModule } from './codiguito-routing.module';

import { RouterModule, Routes } from '@angular/router';

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodiguitoPageRoutingModule
  ],
  declarations: [CodiguitoPage]
})
export class CodiguitoPageModule {}

