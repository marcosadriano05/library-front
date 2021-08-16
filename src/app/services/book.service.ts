import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl: string = 'http://localhost:3333/obras';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  postBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.bookUrl, book, this.httpOptions)
      .pipe(
        tap((newBook: Book) => console.log(newBook))
      );
  }
}
