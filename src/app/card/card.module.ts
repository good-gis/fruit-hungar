import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardPage } from './card.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CardPageRoutingModule } from './card-routing.module';
import {HeaderModule} from "../header/header.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HeaderModule,
    CardPageRoutingModule
  ],
  declarations: [CardPage]
})
export class CardPageModule {}
