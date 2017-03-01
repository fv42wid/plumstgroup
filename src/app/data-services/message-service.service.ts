import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Message } from './message-interface';

@Injectable()
export class MessageService {
  messageUrl = 'http://35.165.61.165/messages';

  constructor(private http: Http) { }

  createMessage(message) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});
    return this.http.post(this.messageUrl, JSON.stringify(message), {headers: headers})
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  handleError(error: Response) {
    console.log(error);
    return Observable.throw(error || 'Server error');
  }

}
