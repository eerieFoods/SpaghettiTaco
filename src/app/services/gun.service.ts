import { Injectable } from '@angular/core';
import Gun from 'gun';
import 'gun/sea';
import 'gun/axe';
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
    this.gun.on('auth', () => {
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
    this.user.auth(username, password, () => {
      this.router.navigate(['/dashboard']).then(r => console.log(r));
    });
  }

  isLoggedIn() {
    return this.user.is;
  }

  getFromUser(key: string) {
    return this.user.get(key);
  }

  signOut() {
    this.user.leave();
    this.router.navigate(['/']);
  }

}
