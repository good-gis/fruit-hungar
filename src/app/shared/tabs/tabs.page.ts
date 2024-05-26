import { Component } from '@angular/core';
import {BasketService} from "../basket.service";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public basketService: BasketService) {}

}
