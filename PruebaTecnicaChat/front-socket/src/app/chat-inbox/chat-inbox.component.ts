import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

const SOCKET_ENPOINT = 'localhost:3000'
@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.scss']
})
export class ChatInboxComponent implements OnInit {
  socket;
  message: string;
  user: string;
  messages: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setupSocketConnection();
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENPOINT);
    this.socket.on('message-broadcast', (data) => {
      if (data) {
        console.log(data);
        data.rightMsg = false
        this.messages.push(data);
        this.moveScroll();
      }
    });

  }

  sendMessage() {
    console.log(this.user);
    if (this.user == "" || this.user == undefined) {
      this.focusElementId('inputName');
    }
    else {
      let msg = { message: this.message, user: this.user, date: new Date().toLocaleDateString(), rightMsg: true };
      this.socket.emit('message', msg);
      this.messages.push(msg);
      this.message = '';
      this.moveScroll();
    }

  }

  moveScroll() {
    setTimeout(() => {
      const msgerChat = document.getElementById('msger-chat');
      msgerChat.scrollTop = msgerChat.scrollHeight + 10;
    }, 200);

  }

  focusElementId(id: string) {
    setTimeout(() => {
      const name = document.getElementById(id);
      name.focus();
    }, 10);

  }

  focusMsg(){
    this.focusElementId('inputMsg');
  }
}