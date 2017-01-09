import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { RouterModule }       from '@angular/router';
import { HttpModule }         from '@angular/http';
import { BrowserModule }      from '@angular/platform-browser';

import { AppComponent }           from './app.component';
import { BooksComponent }         from './books.component';
import { BookDetailComponent }    from './book-detail.component';
import { DashboardComponent }     from './dashboard.component';
import { TestComponent }          from './test.component';

import { BookService }            from './book.service';

import { ExamplePipe }            from './example.pipe';
import { OrderByPipe }            from './order-by.pipe';

@NgModule({
  imports:      [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'detail/:id',
        component: BookDetailComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    DashboardComponent,
    TestComponent,
    ExamplePipe,
    //OrderByPipe
  ],
  providers: [
    BookService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
