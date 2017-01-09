import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';

import { Observable }               from 'rxjs/Observable';
import { Book }                     from './book';
import { BOOKS }                    from './mock-books';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const urlServer: string = 'http://localhost:5000/books';

@Injectable()
export class BookService {

  private books: Book[] = BOOKS;

  constructor(private http: Http) {}

  getBooks(): Book[] {
    return this.books;
  }

  getBooksObs(): Observable<Book[]> {
    return this.http.get(urlServer)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getBook(id: number): Book{
    return this.books.filter(book => book.id === id)[0];
  }



   addBook(body: Book): Observable<Book> {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     let bodyString   = JSON.stringify(body);
      return this.http.post(urlServer, bodyString, options)
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    updateBook(body: Object): Observable<Book> {
      let bodyString = JSON.stringify(body);
      return this.http.put(`${urlServer}/${body['id']}`, body)
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }

    removeBook(id: number): Observable<number> {
      return this.http.delete(`${urlServer}/${id}`)
        .map((res:Response) => res.json())
        .catch(this.handleError);
    }





    private handleError (error: Response | any) {
      let errMsg: string;

      if (error instanceof Response) {
        errMsg = `${error.status} - ${error.statusText}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      return Observable.throw(errMsg);
    }

}
