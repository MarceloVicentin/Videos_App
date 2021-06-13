import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FearPageRoutingModule } from './fear-routing.module';

import { FearPage } from './fear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FearPageRoutingModule
  ],
  declarations: [FearPage]
})
export class FearPageModule {}
