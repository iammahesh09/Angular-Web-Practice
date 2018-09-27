import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDatashareService {
  constructor() { }
  private DataBase: any = [];

  setData(data) {
    this.DataBase.push(data);
  }

  getData(): any {
    return this.DataBase;
  }

}
