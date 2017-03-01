import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { MessageService } from '../data-services/message-service.service';
import { Message } from '../data-services/message-interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted: boolean = false;
  completed: boolean = false;
  //message: Message = {email: '', fname: '', lname: '', body: ''};
  message: Message;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.message = <Message>{
      email: '',
      fname: '',
      lname: '',
      body: ''
    }
  }

  createMessage(message: Message) {
    console.log(message);
    this.submitted = true;
    this.messageService.createMessage(message)
      .subscribe(
        data => { 
          this.completed = true;
          return true;
        },
        error => {
          console.log("Error saving message");
          return Observable.throw(error);
        }
      );
  }

}
