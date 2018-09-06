import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentValue: any;
  childMsg: any;

  constructor() { }

  ngOnInit() {
  }

  sharedData(data) {
    console.log("Input Data :" + data);
    this.parentValue = data;
    console.log("Parent Data :" + this.parentValue);
  }
  recevieMsgData($event) {
    console.log($event)
    this.childMsg = $event;
  }


}
