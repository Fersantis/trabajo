
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Asegúrate de que IonicModule esté importado
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { E404Page } from './e404.page';

const routes: Routes = [
  {
    path: '',
    component: E404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class E404PageRoutingModule {}