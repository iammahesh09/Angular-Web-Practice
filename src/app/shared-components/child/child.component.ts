import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childMsg: string;

  @Input() childMessage: any;

  @Output() bindChildEvent = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }


  sharedData(data) {
    console.log("Input Data :" + data);
    this.bindChildEvent.emit(data)
  }

}
