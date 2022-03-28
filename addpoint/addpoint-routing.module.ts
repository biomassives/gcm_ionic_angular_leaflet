import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddpointPage } from './addpoint.page';

const routes: Routes = [
  {
    path: '',
    component: AddpointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddpointPageRoutingModule {}
