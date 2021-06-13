import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FalcaoPage } from './falcao.page';

const routes: Routes = [
  {
    path: '',
    component: FalcaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FalcaoPageRoutingModule {}
