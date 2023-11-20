import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {
  NbButtonModule, NbCardModule, NbChatModule, NbContextMenuModule, NbFormFieldModule, NbIconModule, NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule, NbUserModule
} from "@nebular/theme";
import { ChatListComponent } from './components/chat-list/chat-list.component';
import {NbEvaIconsModule} from "@nebular/eva-icons";
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AuthComponent,
    DashboardComponent,
    ChatListComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbEvaIconsModule,
    NbIconModule,
    NbContextMenuModule,
    NbInputModule,
    NbFormFieldModule,
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
