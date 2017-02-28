import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Message } from './message-interface';

@Injectable()
export class MessageServiceService {
  messageUrl = '...TODO...';

  constructor() { }

}
