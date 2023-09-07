import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecuperarPageModule } from './recuperar/recuperar.module';
import { LoginPage } from './login/login.page';


const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'access',
    loadChildren: () => import('./access/access.module').then( m => m.AccessPageModule)
  },

  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then(m => m.RecuperarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ,

      RecuperarPageModule // Asegúrate de que el módulo se importe aquí
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
