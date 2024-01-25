import { Component, OnInit } from '@angular/core';
import {strawberries} from "./strawberries-mock";

@Component({
  selector: 'app-strawberry',
  templateUrl: './strawberry.page.html',
  styleUrls: ['./strawberry.page.scss'],
})
export class StrawberryPage implements OnInit {
  public progress = 0.6;
  public days: number = 4;

  constructor() { }

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
    return ((30 - days) / 30) * 100;
  }

  protected readonly strawberries = strawberries;
}
