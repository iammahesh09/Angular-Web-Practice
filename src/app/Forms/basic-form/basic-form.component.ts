import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  _user: any = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this._user)
  }
}
