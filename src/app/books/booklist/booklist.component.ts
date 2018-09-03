import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  books: any;

  constructor(private _booksServices: BooksService) { }

  ngOnInit() {
    this._booksServices.getBooks().subscribe(
      res => {
        this.books = res
      },
      error => {
        console.log(error);
      }
    )
  }


}
