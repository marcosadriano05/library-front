import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  public book?: Book

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBook(id).subscribe(book => console.log(book));
    }
  }

}
