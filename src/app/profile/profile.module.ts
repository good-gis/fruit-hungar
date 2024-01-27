import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import {ProfilePage} from "./profile.page";
import {HeaderModule} from "../header/header.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  declarations: [ProfilePage]
})
export class ProfileModule {}
