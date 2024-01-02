import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPage } from './main.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MainPageRoutingModule } from './main-routing.module';
import {HeaderModule} from "../header/header.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        MainPageRoutingModule,
        HeaderModule
    ],
  declarations: [MainPage]
})
export class MainPageModule {}
