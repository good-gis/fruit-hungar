import { Component } from '@angular/core';
import {AlertController, NavController} from "@ionic/angular";
import {StrawberryPage} from "../strawberry/strawberry.page";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage {
  constructor(public router: Router, private alertController: AlertController) {}

  berriesClick() {
    this.router.navigate(['tabs/strawberry']);
  }

  async presentAlertVegetablesNotAvailable() {
    const alert = await this.alertController.create({
      header: 'Овощи не доступны',
      message: 'К сожалению, в данный момент категория овощи не доступна. Мы работаем над тем, чтобы добавить возможность заказать овощи в ближайшее время.',
      buttons: ['Хорошо'],
    });

    await alert.present();
  }
}
