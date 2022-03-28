import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThanksPageRoutingModule } from './thanks-routing.module';

import { ThanksPage } from './thanks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThanksPageRoutingModule
  ],
  declarations: [ThanksPage]
})
export class ThanksPageModule {}
