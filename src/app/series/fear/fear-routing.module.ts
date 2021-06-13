import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FearPage } from './fear.page';

const routes: Routes = [
  {
    path: '',
    component: FearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FearPageRoutingModule {}
