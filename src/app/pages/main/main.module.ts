import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPage } from './main.page';
import { MainPageRoutingModule } from './main-routing.module';
import {HeaderModule} from "../../shared/header/header.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        MainPageRoutingModule,
        HeaderModule
    ],
  declarations: [MainPage]
})
export class MainPageModule {}
