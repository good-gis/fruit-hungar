import { Component } from '@angular/core';
import {NavController} from "@ionic/angular";
import {StrawberryPage} from "../strawberry/strawberry.page";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage {
  constructor(public router: Router) {}

  click() {
    this.router.navigate(['tabs/strawberry']);
  }
}
