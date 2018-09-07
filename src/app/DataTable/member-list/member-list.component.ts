import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  data: { 'name': string; 'email': string; 'dob': string; 'city': string; }[];
  constructor() { }

  ngOnInit() {
    this.data = [
      { 'name': 'Jaydeep', 'email': 'Jaydeep.tywry@gmail.com', 'dob': '09/07/1985', 'city': 'Mumbai' },
      { 'name': 'Ankit', 'email': 'Ankit.hsdhsh@gmail.com', 'dob': '05/21/1992', 'city': 'Hyderabad' },
      { 'name': 'Krunal', 'email': 'Krunal.pakainfo@gmail.com', 'dob': '01/07/1980', 'city': 'Chennai' },
      { 'name': 'Milan', 'email': 'Milan.hsfh@gmail.com', 'dob': '09/29/1990', 'city': 'Mumbai' },
      { 'name': 'Chirag', 'email': 'Chirag.btyj@gmail.com', 'dob': '12/18/1972', 'city': 'Mumbai' },
      { 'name': 'Vivek', 'email': 'Vivek.sdfe@gmail.com', 'dob': '02/06/1945', 'city': 'Pune' },
      { 'name': 'Vihal', 'email': 'Vihal.dsg@gmail.com', 'dob': '09/12/1960', 'city': 'Pune' },
      { 'name': 'Vijay', 'email': 'Vijay.fgd@gmail.com', 'dob': '04/30/1999', 'city': 'Chennai' }
    ]
  }

}
