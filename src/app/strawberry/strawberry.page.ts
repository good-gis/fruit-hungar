import { Component, OnInit } from '@angular/core';
import {strawberries} from "./strawberries-mock";
import {options} from "ionicons/icons";
import {BasketService} from "../basket.service";
import {Strawberry} from "./strawberry";

@Component({
  selector: 'app-strawberry',
  templateUrl: './strawberry.page.html',
  styleUrls: ['./strawberry.page.scss'],
})
export class StrawberryPage implements OnInit {
  selectedOption = '500';

  constructor(public basketService: BasketService) { }

  ngOnInit() {
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
    this.basketService.addOrUpdateProduct({
      productId: sort.id,
      quantity: Number(this.selectedOption),
      pricePerKg: sort.pricePerKg
    })
  }
}
