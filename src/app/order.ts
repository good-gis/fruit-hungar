import {BasketItem} from "./basket.service";

export interface Order {
  date: string,
  userId: string,
  product: BasketItem[],
}
