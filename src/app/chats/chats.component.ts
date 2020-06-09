import {Component, OnInit} from '@angular/core';
import {ConversationService} from '../services/conversation.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  public users: Array<any>;

  constructor(public conversationService: ConversationService) {
    this.users = conversationService.getAllChats();
    console.log(this.users);
  }

  clickChat() {
  }

  ngOnInit(): void {
  }

}
