import { Component } from '@angular/core';
import {BasketItem, BasketService} from "../basket.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: 'card.page.html',
  styleUrls: ['card.page.scss', '../app.component.scss']
})
export class CardPage {

  constructor(public router: Router, public basketService: BasketService) {}

  plusProductQuantity(product: BasketItem): void {
    if (product.quantity === 500) {
      product.quantity = 1000;
    } else {
      product.quantity = product.quantity + 1000;
    }

    this.basketService.addOrUpdateBasketItem(product);
  }


  minusProductQuantity(product: BasketItem): void {
    if (product.quantity === 500) {
      return;
    } else if(product.quantity === 1000) {
      product.quantity = product.quantity - 500;
    } else {
      product.quantity = product.quantity - 1000;
    }

    this.basketService.addOrUpdateBasketItem(product);
  }

  goToMainPage() {
    this.router.navigate(['tabs/main'])
  }
}
