import { Component, OnInit } from '@angular/core';
import {JokesService} from './jokes.service';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {
message: string;
url = `https://api.chucknorris.io/jokes/random`;
value: string;
jokes: any[] = [];
  constructor(private jokesService: JokesService) {
  }

  ngOnInit(): void {}

  addMessage(item){
   this.message = item.value;
  }
  addChak( ){
    this.jokesService.getRandomJoke()
      .subscribe(joke => {
        this.jokes.push(joke)
      });
  }

}
