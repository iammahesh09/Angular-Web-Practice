import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject = new Subject<any>()

  constructor() { }

  SendMsg(message: any) {
    this.subject.next({ text: message })
  }

  ClearMsg() {
    this.subject.next();
  }

  getMsg(): Observable<any> {
    return this.subject.asObservable();
  }
}
