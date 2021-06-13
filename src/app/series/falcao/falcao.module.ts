import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FalcaoPageRoutingModule } from './falcao-routing.module';

import { FalcaoPage } from './falcao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FalcaoPageRoutingModule
  ],
  declarations: [FalcaoPage]
})
export class FalcaoPageModule {}
