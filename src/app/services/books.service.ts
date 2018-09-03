import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksUrl: string = "https://fakerestapi.azurewebsites.net/api/Books";

  constructor(private _http: HttpClient) { }

  getBooks(): Observable<any> {
    return this._http.get(this.booksUrl).pipe(map(res => res))
  }


}
