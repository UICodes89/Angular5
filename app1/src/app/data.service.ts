import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  constructor() { }

  private message = new BehaviorSubject<string>('default Message');
  currentMessage = this.message.asObservable();

  changeMessage(message:string){
    this.message.next(message);
  }

}
