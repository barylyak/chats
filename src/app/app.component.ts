import { Component } from '@angular/core';
import {ConversationService} from './services/conversation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConversationService]
})
export class AppComponent {
  title = 'chats';
}
