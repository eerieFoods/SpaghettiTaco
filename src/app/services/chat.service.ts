import { Injectable } from '@angular/core';
import {Message} from "../models/message.model";
import {GunService} from "./gun.service";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private gunService: GunService) {
  }

  clearChatroom(chatroom: string) {
    this.gunService.gun.get(this.gunService.NODE_NAME).get(chatroom).put(null);
  }

  saveMessage(chatroom: string, message: Message) {
    let index = Date.now().toString()
    this.gunService.gun.get(this.gunService.NODE_NAME).get(chatroom).get(index).put(message);
  }

  // getMessages(chatroom: string): Message[] {
  //   var messages: Message[] = [];
  //
  //   this.gunService.gun.get(this.gunService.NODE_NAME).get(chatroom).open((data: any) => {
  //     Object.entries(data).forEach((entry: any) => {
  //       SEA.decrypt(entry[1], environment.HOLY_GRAIL).then((decrypted: any) => {
  //       messages.push(entry[1]);
  //       console.log(entry[1]);
  //       });
  //     });
  //   });
  //   return messages;
  // }

}
