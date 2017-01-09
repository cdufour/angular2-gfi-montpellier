import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  //providers: [BookService]
})
export class DashboardComponent {
  books: Book[];

  constructor(private bs: BookService) {
   this.books = bs.getBooks().slice(0,3);
  }
}
