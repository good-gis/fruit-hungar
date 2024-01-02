import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationPage } from './notification.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NotificationPageRoutingModule } from './notification-routing.module';
import {HeaderModule} from "../header/header.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        NotificationPageRoutingModule,
        HeaderModule
    ],
  declarations: [NotificationPage]
})
export class NotificationPageModule {}
