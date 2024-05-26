import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Strawberry} from "../pages/strawberry/strawberry";

@Injectable({
  providedIn: 'root'
})
export class StrawberryService {

  constructor( private fireDatabase: AngularFireDatabase) { }

  getStrawberryProducts(): Observable<Strawberry[]> {
    return this.fireDatabase.list('/strawberry', ref => ref.orderByChild('id')).valueChanges() as Observable<Strawberry[]>;
  }
}
