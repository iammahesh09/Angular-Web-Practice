import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnDestroy {

  message: any;
  subscription: Subscription;

  constructor(private _sharedService: SharedService) {
    // subscribe messages
    this.subscription = this._sharedService.getMsg().subscribe(message => { this.message = message; });
    console.log(this.message.text)
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
