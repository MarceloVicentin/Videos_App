import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loki',
    loadChildren: () => import('./series/loki/loki.module').then( m => m.LokiPageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'dados-serie',
    loadChildren: () => import('./dados-serie/dados-serie.module').then( m => m.DadosSeriePageModule)
  },
  {
    path: 'falcao',
    loadChildren: () => import('./series/falcao/falcao.module').then( m => m.FalcaoPageModule)
  },
  {
    path: 'superman',
    loadChildren: () => import('./series/superman/superman.module').then( m => m.SupermanPageModule)
  },
  {
    path: 'fear',
    loadChildren: () => import('./series/fear/fear.module').then( m => m.FearPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
