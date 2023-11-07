import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodiguitoPage } from './codiguito.page';

const routes: Routes = [
  {
    path: '',
    component: CodiguitoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodiguitoPageRoutingModule {}
