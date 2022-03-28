import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpointPageRoutingModule } from './addpoint-routing.module';

import { AddpointPage } from './addpoint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpointPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddpointPage]
})
export class AddpointPageModule {}
