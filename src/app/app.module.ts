import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ChatsComponent } from './chats/chats.component';
// import { DialogComponent } from './dialog/dialog.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ChatsComponent,
    // DialogComponent,
    ChatDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
