import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfileRoutingModule } from './profile-routing.module';
import {ProfilePage} from "./profile.page";
import {HeaderModule} from "../header/header.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        ProfileRoutingModule,
        HeaderModule
    ],
  declarations: [ProfilePage]
})
export class ProfileModule {}
