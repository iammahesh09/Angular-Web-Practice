import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  data: { 'name': string; 'email': string; 'age': string; 'city': string; }[];
  constructor() { }

  ngOnInit() {
    this.data = [
      { 'name': 'Jaydeep', 'email': 'Jaydeep.tywry@gmail.com', 'age': '26', 'city': 'Rajkot' },
      { 'name': 'Ankit', 'email': 'Jaydeep.hsdhsh@gmail.com', 'age': '26', 'city': 'Rajkot' },
      { 'name': 'Krunal', 'email': 'Jaydeep.pakainfo@gmail.com', 'age': '26', 'city': 'Rajkot' },
      { 'name': 'Milan', 'email': 'Jaydeep.hsfh@gmail.com', 'age': '26', 'city': 'Rajkot' },
      { 'name': 'Chirag', 'email': 'Jaydeep.btyj@gmail.com', 'age': '26', 'city': 'Rajkot' },
      { 'name': 'Vivek', 'email': 'Jaydeep.pakainfo@gmail.com', 'age': '26', 'city': 'Rajkot' },
      { 'name': 'Vihal', 'email': 'Jaydeep.pakainfo@gmail.com', 'age': '26', 'city': 'Rajkot' },
      { 'name': 'Vijay', 'email': 'Jaydeep.pakainfo@gmail.com', 'age': '26', 'city': 'Rajkot' }
    ]
  }

}
