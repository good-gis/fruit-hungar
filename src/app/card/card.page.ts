import { Component } from '@angular/core';
import {BasketItem, BasketService} from "../basket.service";
import {Router} from "@angular/router";
import {LocalstorageService} from "../localstorage.service";
import {AlertController} from "@ionic/angular";
import {OrderService} from "../order.service";

@Component({
  selector: 'app-card',
  templateUrl: 'card.page.html',
  styleUrls: ['card.page.scss', '../app.component.scss']
})
export class CardPage {

  constructor(public orderService: OrderService, public router: Router, public basketService: BasketService, public localDb: LocalstorageService, private alertController: AlertController) {}

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

  async makeAnOrder(productInBasket: BasketItem[]) {
    const userId = await this.localDb.get('userId');
    if (!await this.localDb.get('userId')) {
      const alert = await this.alertController.create({
        header: 'Авторизуйтесь или заполните данные профиля',
        message: 'Для офорления заказа требуется заполнить профиль. Заполните, пожалуйста, профиль, а Ваши ягодки подождут Вас в корзине',
        buttons: [{
          text: 'Открыть Профиль',

          handler: ()=> {
            this.router.navigate(['tabs/profile'])
          }}],
      });

      await alert.present();
    } else {
      await this.orderService.createOrder({
        userId: userId,
        date: new Date().toTimeString(),
        product: productInBasket,
      })
      this.router.navigate(['tabs/order'])
    }
  }
}
