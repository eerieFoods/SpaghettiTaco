import { Injectable } from '@angular/core';
import Gun, {GunCallbackUserCreate} from 'gun';
import 'gun/sea';
import 'gun/axe';
import {GunCallbackUserAuth} from "gun/types/sea/GunCallbackUserAuth";

@Injectable({
  providedIn: 'root',
})
export class GunService {
  gun;
  user;

  constructor() {
    this.gun = Gun('https://test.eeriefoods.de/gun');
    this.user = this.gun.user().recall({ sessionStorage: true });
  }

  createUser(username: string, password: string) {
    this.user.create(username, password, (ack: GunCallbackUserCreate) => {
      console.log(ack);
    });
  }

  signIn(username: string, password: string) {
    this.user.auth(username, password, (ack: GunCallbackUserAuth) => {
        console.log(ack);
    });
  }

  isLoggedIn() {
    return this.user.is;
  }

  getFromUser(key: string) {
    return this.user.get(key);
  }

}
