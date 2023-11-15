import { Injectable } from '@angular/core';
import Gun, {GunCallbackUserCreate} from 'gun';
import 'gun/sea';
import 'gun/axe';
import {GunCallbackUserAuth} from "gun/types/sea/GunCallbackUserAuth";
import {environment} from "../../environments/environment.development";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class GunService {
  gun;
  user;

  constructor(private router: Router) {
    this.gun = Gun(environment.DB_URL);
    this.user = this.gun.user().recall({ sessionStorage: true });
    this.gun.on('auth', (x) => {
      console.log(x);
      console.log("Logged In?: " + this.isLoggedIn())
      this.router.navigate(['/dashboard']).then(r => console.log(r));
    });
  }

  createUser(username: string, password: string) {
    this.user.create(username, password, (ack: any) => {
      if (ack.err) {
        alert(ack.err);
      } else {
        this.signIn(username, password);
      }
    });
  }

  signIn(username: string, password: string) {
    this.user.auth(username, password, (ack: GunCallbackUserAuth) => {
      this.router.navigate(['/dashboard']).then(r => console.log(r));
    });
  }

  isLoggedIn() {
    console.log("Id: " + this.user.id);
    return this.user.id != undefined;
  }

  getFromUser(key: string) {
    return this.user.get(key);
  }

  signOut() {
    this.user.leave();
  }

}
