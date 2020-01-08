import { MessageService } from './../../shared/message.service';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  message: Message = new Message();
  messages: Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessage().subscribe(message => {
      console.log('new message : ', message);
      this.messages.push(message);
    });
  }

  send() {
    this.messageService.sendMessage(this.message);
    this.message = new Message(); 
  }
}
