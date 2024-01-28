import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/compat/database";
import { User } from "./user";
import {map, Observable} from "rxjs";
import {LocalstorageService} from "./localstorage.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private localDb: LocalstorageService, private fireDatabase: AngularFireDatabase) {}

  // Create
  async createUser(user: User): Promise<string | null> {
    if (await this.localDb.get('userId')) {
      this.updateUser(user);
      return null;
    }
    const userId = this.fireDatabase.database.ref('/users/').push(user).key;
    this.localDb.set('userId', userId);

    return userId;
  }

 async updateUser(user: User) {
    const userId = await this.localDb.get('userId');
    await this.fireDatabase.database.ref('/users/' + userId).update(user);
  }

  getUser(id: string): AngularFireObject<User> {
    return this.fireDatabase.object('/users/' + id);
  }

  // Get User List
  getUserList(): AngularFireList<User> {
    return this.fireDatabase.list('/users');
  }

  // Delete
  deleteUser(id: string) {
    this.fireDatabase.object('/users/' + id).remove();
  }

  getUserIdByPhoneAndPassword(phone: string, password: string): Observable<string | null> {
    return this.fireDatabase.list('/users', ref =>
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
    return this.fireDatabase.list('/users', ref =>
      ref.orderByChild('phone').equalTo(phone).limitToFirst(1)
    ).snapshotChanges().pipe(
      map(changes => {
        const user = changes[0]?.payload.val();
        return user ? changes[0]?.payload.key : null;
      })
    );
  }
}
