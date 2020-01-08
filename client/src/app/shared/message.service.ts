import { Message } from './message';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private socket: Socket) {}

  sendMessage(message: Message) {
    this.socket.emit("message", message);
  }

  getMessage(): Observable<Message> {
    return this.socket.fromEvent("message");
  }
}
