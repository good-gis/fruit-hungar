import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/compat/database";
import { User } from "./user";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private db: AngularFireDatabase) {}

  // Create
  createUser(user: User): string | null {
   return this.db.database.ref('/users/').push(user).key;
  }

  // Get Single
  getUser(id: string): AngularFireObject<User> {
    return this.db.object('/users/' + id);
  }

  // Get User List
  getUserList(): AngularFireList<User> {
    return this.db.list('/users');
  }

  // Delete
  deleteUser(id: string) {
    this.db.object('/users/' + id).remove();
  }

  getUserIdByPhoneAndPassword(phone: string, password: string): Observable<string | null> {
    return this.db.list('/users', ref =>
      ref.orderByChild('phone').equalTo(phone).limitToFirst(1)
    ).snapshotChanges().pipe(
      map(changes => {
        const user = changes[0]?.payload.val();
        // @ts-ignore
        if (user && user.password === password) {
          return changes[0]?.payload.key;
        } else {
          return null;
        }
      })
    );
  }

  getUserIdByPhone(phone: string): Observable<string | null> {
    return this.db.list('/users', ref =>
      ref.orderByChild('phone').equalTo(phone).limitToFirst(1)
    ).snapshotChanges().pipe(
      map(changes => {
        const user = changes[0]?.payload.val();
        return user ? changes[0]?.payload.key : null;
      })
    );
  }
}
