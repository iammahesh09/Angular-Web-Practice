import { Component, OnInit } from '@angular/core';
import { UserDatashareService } from '../../services/user-datashare.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  showUser
  constructor(private _dataShare: UserDatashareService) { }

  ngOnInit() {
    this.showUser = this._dataShare.getData()
    console.log(this.showUser)
  }


}
