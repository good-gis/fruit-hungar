import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPageRoutingModule } from './order-routing.module';

import { OrderPage } from './order.page';
import {HeaderModule} from "../../shared/header/header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderPageRoutingModule,
        HeaderModule
    ],
  declarations: [OrderPage]
})
export class OrderPageModule {}
