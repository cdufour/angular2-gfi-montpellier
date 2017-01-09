import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { BookService }              from './book.service';


import { Book } from './book';

@Component({
  selector: 'book-detail',
  template: `
    <div *ngIf="book">
      <h2>{{book.title}}</h2>
      <p>Auteur: <input type="text" [value]="book.author"></p>
      <p>Livre paru en {{book.year}}</p>
    </div>
    <button
      *ngIf="isBooksPage()"
      (click)="goBack()">Retour</button>
  `
})
export class BookDetailComponent implements OnInit {
  title: string = "titre";

  constructor(
    private route: ActivatedRoute,
    private bs: BookService,
    private location: Location
  ) {}

  ngOnInit(): void{
    let id: number;
    this.route.params.subscribe(book => {
        id = +book['id'];
        this.book = this.bs.getBook(id);
      });
  }

  @Input()
  book: Book;

  goBack(): void {
    this.location.back();
  }

  isBooksPage(): boolean {
    return this.location.path() !== '/books';
  }
}
