import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrawberryPageRoutingModule } from './strawberry-routing.module';

import { StrawberryPage } from './strawberry.page';
import {HeaderModule} from "../../shared/header/header.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrawberryPageRoutingModule,
    HeaderModule
  ],
  declarations: [StrawberryPage]
})
export class StrawberryPageModule {}
