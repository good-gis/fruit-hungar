import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private _productInBasket: BasketItem[] = [];
  constructor() { }

  get productInBasket(): BasketItem[] {
    return this._productInBasket;
  }

  addOrUpdateProduct(product: BasketItem) {
    let foundObject = this._productInBasket.find(obj => obj.productId === product.productId);
    if (foundObject) {
      foundObject = product;
    } else {
      this._productInBasket.push(product);
    }
  }

  deleteProduct(productId: number) {
    let index = this._productInBasket.findIndex(obj => obj.productId === productId);
    if (index !== -1) {
      this._productInBasket.splice(index, 1);
    }
  }
}

interface BasketItem {
  productId: number,
  quantity: number,
  pricePerKg: number
}
