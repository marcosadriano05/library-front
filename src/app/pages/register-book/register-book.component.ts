import { Component, OnInit } from '@angular/core';

import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css']
})
export class RegisterBookComponent implements OnInit {

  public book: Book = {
    title: '',
    publisher: '',
    authors: [],
    photo: ''
  };

  public authors: string = '';

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  formSubmit() {
    this.book.authors = this.authors.split(',').map(author => author.trim());
    this.bookService.postBook(this.book).subscribe(book => console.log(book));
  }

}
