import { Component, OnInit } from '@angular/core';

type Book = {
  title: string;
  publisher: string;
  photo: string;
  authors: string;
};

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.css']
})
export class RegisterBookComponent implements OnInit {

  book: Book = {
    title: '',
    publisher: '',
    authors: '',
    photo: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.book.title);
    console.log(this.book.publisher);
    console.log(this.book.photo);
    console.log(this.book.authors);
  }

}
