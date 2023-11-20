import {Component} from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {Message} from "../../models/message.model";
import {GunService} from "../../services/gun.service";
import {messages} from "./messages";

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {

  messages: Message[] = [];
  alias: string = "";

  constructor(protected chatService: ChatService, private gunService: GunService) {
    this.messages = this.chatService.getMessages("room1");
    this.gunService.user.get('alias').on((v: any) => this.alias = v);
  }

  timestampToDate(timestamp: number) {
    return new Date(timestamp);
  }

  sendMessage(event: any) {
    const content = event.message;

    const message: Message = {
      timestamp: Date.now(),
      sender: this.alias,
      text: content,
      type: "text"
    }

    this.chatService.saveMessage("room1", message);

    // const files = !event.files ? [] : event.files.map((file: { src: any; type: any; }) => {
    //   return {
    //     url: file.src,
    //     type: file.type,
    //     icon: 'nb-compose',
    //   };
    // });
    //
    // this.messages.push({
    //   text: event.message,
    //   date: new Date(),
    //   reply: true,
    //   type: files.length ? 'file' : 'text',
    //   files: files,
    //   user: {
    //     name: 'Jonh Doe',
    //     avatar: 'https://i.gifer.com/no.gif',
    //   },
    // });
    // const botReply = this.chatService.reply(event.message);
    // if (botReply) {
    //   setTimeout(() => { this.messages.push(botReply); }, 500);
    // }
  }
}
