import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basketItems$: BehaviorSubject<BasketItem[]> = new BehaviorSubject<BasketItem[]>([]);
  constructor() { }

  get productInBasket(): BasketItem[] {
    return this.basketItems$.value;
  }

  get getBasketItems$(): BehaviorSubject<BasketItem[]> {
    return this.basketItems$;
  }

  addOrUpdateBasketItem(item: BasketItem): void {
    const basketItems = this.basketItems$.getValue();
    const existingIndex = basketItems.findIndex(i => i.productId === item.productId);

    if (existingIndex !== -1) {
      // Элемент уже существует, обновляем его
      basketItems[existingIndex] = item;
    } else {
      // Элемент не найден, добавляем новый элемент
      basketItems.push(item);
    }

    // Оповещаем подписчиков о изменении массива basketItems
    this.basketItems$.next(basketItems);
  }

  removeBasketItem(productId: number): void {
    const basketItems = this.basketItems$.getValue();
    const updatedBasketItems = basketItems.filter(item => item.productId !== productId);

    // Оповещаем подписчиков о изменении массива basketItems
    this.basketItems$.next(updatedBasketItems);
  }

  getBasketTotalCost$(): Observable<number> {
    return this.basketItems$.pipe(
      map(basketItems => {
        let totalCost = 0;
        for (const item of basketItems) {
          totalCost += (item.quantity / 1000) * item.pricePerKg;
        }
        return totalCost;
      })
    );
  }
}

export interface BasketItem {
  berries: string,
  sort: string,
  productId: number,
  quantity: number,
  pricePerKg: number,
  image: string
}
