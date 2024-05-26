import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Order} from "./order";
import {AlertController} from "@ionic/angular";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(public alertController: AlertController, private fireDatabase: AngularFireDatabase) {}

  async createOrder(order: Order) {
    try {
      this.fireDatabase.database.ref('/orders/').push(order);
    } catch (error) {
      console.error('Ошибка при создании заказа:', error);
      const alert = await this.alertController.create({
        header: 'Ошибка при создании заказа',
        message: 'Поробуйте, пожалуйста, оформить заказ еще раз',
        buttons: [{text: 'Хорошо'}]
      });

      alert.present();
    }
  }

  getOrdersByUserId(userId: string): Observable<Order[]> {
    return this.fireDatabase.list('/orders', ref => ref.orderByChild('userId').equalTo(userId)).valueChanges() as Observable<Order[]>;
  }

}
