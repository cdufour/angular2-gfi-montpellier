import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

import * as _ from "lodash";

@Component({
  moduleId: module.id,
  selector: 'books',
  templateUrl: 'books.component.html',
  styleUrls: ['books.component.css']
})
export class BooksComponent implements OnInit {
  title: string = '';
  books: Book[] = [];
  booksFiltered: Book[] = [];
  selectedBook: Book = null;
  class: string = 'test';

  book = new Book('', '', 1999, true);

  search: string = '';

  editMode: boolean = false;
  message: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooksObs()
      .subscribe(
        (books: Book[]) => this.books = this.booksFiltered = books,
        error => {
          console.log(error);
          this.message = "Problème dans le chargement des données"
        });
  }

  displayDetail(book: Book): void {
    this.selectedBook = book;
  }

  availableMessage(state: boolean): string {
    return (state) ? 'Disponible' : 'Non disponible';
  }

  getClass(state: boolean): string {
    return (state) ? 'available' : 'not-available';
  }

  submitBook() {
    console.log(this.book);

    // vérifier données avant submit
    if (!this.book.title) return;

    this.bookService.addBook(this.book).subscribe(
      book => this.books.push(book)
    )
  }

  editBook(book: Book) {

  }

  deleteBook(id: number) {
    this.bookService.removeBook(id).subscribe(
      res => _.remove(this.books, book => book.id === res['id'])
    )
  }

  filterBooks(): Book[] {
    return this.books
      .filter(book => book.title.includes(this.search));
  }

}
