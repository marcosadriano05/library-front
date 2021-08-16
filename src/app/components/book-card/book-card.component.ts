import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

  @Input()
  public title: string = '';

  @Input()
  public publisher: string = '';

  @Input()
  public authors: string[] = [];

  @Input()
  public photo: string = '';

}
