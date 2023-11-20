import { Component } from '@angular/core';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent {
 items: NbMenuItem[] = [
    {
      title: 'Family',
      icon: 'people-outline',
    },
    {
      title: 'Crush <3',
    },
    {
      title: 'Chat 3',
    },
    {
      title: 'TINF21AI2',
    },
    {
      title: 'Chat 5',
    },
    {
      title: 'Chat 6',
    },
  ];
}
