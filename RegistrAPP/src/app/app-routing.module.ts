import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagePortegidoGuard } from './guards/page-portegido.guard';
import { E404Page } from './e404/e404.page'; // Asegúrate de que E404Page esté importado correctamente
import { Route } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [PagePortegidoGuard] // Asegúrate de que el guard esté correctamente implementado
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule)
  },
  {
    path: 'access',
    loadChildren: () => import('./access/access.module').then((m) => m.AccessPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then((m) => m.RecuperarPageModule),
    canActivate: [PagePortegidoGuard]
  },
  
  {
    path: 'recuperacion',
    loadChildren: () => import('./recuperacion/recuperacion.module').then( m => m.RecuperacionPageModule)
  },
  {
    path: 'e404', // Agrega la ruta para la página de error 404 si no la has definido
  
    loadChildren: () => import('./e404/e404.module').then((m) => m.E404PageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./e404/e404.module').then((m) => m.E404PageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
