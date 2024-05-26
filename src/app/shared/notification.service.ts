import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {Order} from "./order";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private fireDatabase: AngularFireDatabase) { }

  // getNotifications(): Observable<Notification[]> {
  //   return this.fireDatabase.list('/notification', ref.valueChanges() as Observable<Order[]>;
  // }

}
