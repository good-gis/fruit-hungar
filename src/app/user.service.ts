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
  createUser(user: User) {
    this.db.database.ref('/users/' + user.id).set(user);
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

  // Search User by Password and Phone
  searchUserByPasswordAndPhone(password: string, phone: string): Observable<{ key: string | null }[]> {
    return this.db.list<User>('/users', ref =>
      ref.orderByChild('password').equalTo(password)
        .orderByChild('phone').equalTo(phone)
    ).snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }
}
