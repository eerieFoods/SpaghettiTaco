import { Injectable } from '@angular/core';
import Gun from 'gun';

@Injectable({
  providedIn: 'root',
})
export class GunService {
  gun;
  user;

  constructor() {
    this.gun = Gun('https://gun-manhattan.herokuapp.com/gun');

    this.user = this.gun.user();
    console.log('gun', this.gun);
    console.log(this.user);
  }

  createUser(username: string, password: string) {
    this.user.create(username, password, (ack) => {
      console.log(ack);
    });
  }

  signIn(username: string, password: string) {
    this.user.auth(username, password, (ack) => {
      console.log(ack);
    });
  }
}
