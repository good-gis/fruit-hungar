import {Component, OnInit} from '@angular/core';
import {strawberries} from "./strawberries-mock";
import {BasketService} from "../basket.service";
import {Strawberry} from "./strawberry";
import {catchError, finalize, Observable, tap, throwError} from "rxjs";
import {StrawberryService} from "../strawberry.service";
import {LoadingController} from "@ionic/angular/standalone";

@Component({
  selector: 'app-strawberry',
  templateUrl: './strawberry.page.html',
  styleUrls: ['./strawberry.page.scss'],
})
export class StrawberryPage implements OnInit {

  selectedOption = '500';
  strawberries$: Observable<Strawberry[]>;

  constructor(public basketService: BasketService, public strawberryService: StrawberryService, public loadingCtrl: LoadingController) {}

  async ngOnInit() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    this.strawberries$ = this.strawberryService.getStrawberryProducts().pipe(
      tap(strawberries => {
        // Вызываем loading.dismiss() после получения сортов
        if (strawberries.length > 0) {
          loading.dismiss();
        }
      }),
      catchError(error => {
        console.error('An error occurred:', error);
        loading.dismiss();
        return throwError('Error occurred while fetching strawberry products.');
      }),
    );
  }

  prepareTextForProgressBar(days: number): string {
    switch (days) {
      case 0:
        return 'Урожай собран';
      case 1:
        return 'Сбор урожая через 1 день';
      case 2:
        return 'Сбор урожая через 2 дня';
      case 3:
        return 'Сбор урожая через 3 дня';
      case 4:
        return 'Сбор урожая через 4 дня';
      default:
        return `Сбор урожая через ${days} дней`;
    }
  }

  prepareDataForProgressBar(days: number): number {
    return (100 - days) / 100;
  }

  protected readonly strawberries = strawberries;

  writeResult(sort: Strawberry) {
    this.basketService.addOrUpdateBasketItem({
      berries: 'Клубника',
      sort: sort.sortName,
      image: sort.image,
      productId: sort.id,
      quantity: Number(this.selectedOption),
      pricePerKg: sort.pricePerKg
    })
  }
}
