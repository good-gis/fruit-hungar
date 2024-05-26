import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrawberryPage } from './strawberry.page';

const routes: Routes = [
  {
    path: '',
    component: StrawberryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrawberryPageRoutingModule {}
