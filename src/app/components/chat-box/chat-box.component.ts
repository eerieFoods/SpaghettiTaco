import {Component} from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {Message} from "../../models/message.model";
import {GunService} from "../../services/gun.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {

  messages: Message[] = [];
  alias: string = "";

  chatroom: string | null;

  constructor(protected chatService: ChatService, private gunService: GunService, private route: ActivatedRoute) {
    // this.messages = this.chatService.getMessages("room1");
    this.gunService.user.get('alias').on((v: any) => this.alias = v);

    this.chatroom = this.route.snapshot.paramMap.get("id") == "none" ? null : this.route.snapshot.paramMap.get("id");

    // if (this.chatroom) {
    //   this.gunService.gun.get(this.gunService.NODE_NAME).get(this.chatroom).open((data: any) => {
    //     this.messages = [];
    //     Object.entries(data).forEach((entry: any) => {
    //       this.messages.push(entry[1])
    //     });
    //   });
    // }

    this.route.paramMap.subscribe(params => {
      this.chatroom = params.get("id") == "none" ? null : params.get("id");
      if (this.chatroom) {
        this.gunService.gun.get(this.gunService.NODE_NAME).get(this.chatroom).open((data: any) => {
          this.messages = [];
          Object.entries(data).forEach((entry: any) => {
            this.messages.push(entry[1])
          });
        });
      }
    })

  }

  timestampToDate(timestamp: number) {
    return new Date(timestamp);
  }

  sendMessage(event: any) {
    if (!this.chatroom) {
      return;
    }
    const content = event.message;

    const message: Message = {
      timestamp: Date.now(),
      sender: this.alias,
      text: content,
      type: "text"
    }

    this.chatService.saveMessage(this.chatroom, message);
  }

  clearChat() {
    if (!this.chatroom) {
      return;
    }
    this.chatService.clearChatroom(this.chatroom);
  }
}
