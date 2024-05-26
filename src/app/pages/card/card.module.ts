import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardPage } from './card.page';
import { CardPageRoutingModule } from './card-routing.module';
import {HeaderModule} from "../../shared/header/header.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    CardPageRoutingModule
  ],
  declarations: [CardPage]
})
export class CardPageModule {}
