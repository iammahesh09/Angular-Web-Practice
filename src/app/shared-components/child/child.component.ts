import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childMsg: any;

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this._sharedService.SendMsg('Message App!');
  }

  clearMessage(): void {
    // clear message
    this._sharedService.ClearMsg();
  }



}
