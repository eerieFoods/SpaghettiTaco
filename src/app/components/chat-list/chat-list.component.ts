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
      link: '/dashboard/family'
    },
    {
      title: 'Crush <3',
      link: '/dashboard/crush'
    },
    {
      title: 'Chat 3',
      link: '/dashboard/chat3'
    },
    {
      title: 'TINF21AI2',
      link: '/dashboard/TINF21AI2'
    },
    {
      title: 'Chat 5',
      link: '/dashboard/chat-5'
    },
    {
      title: 'Chat 6',
      link: '/dashboard/chat-6'
    },
   {
      title: 'Chat 7',
      link: '/dashboard/chat-7'
    },
    {
      title: 'Chat 8',
      link: '/dashboard/chat-8'
    },
    {
      title: 'Chat 9',
      link: '/dashboard/chat-9'
    },
    {
      title: 'Chat 10',
      link: '/dashboard/chat-10'
    },
    {
      title: 'Chat 11',
      link: '/dashboard/chat-11'
   }
  ];
}
