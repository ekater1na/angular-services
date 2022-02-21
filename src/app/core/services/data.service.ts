import {Injectable} from '@angular/core';
import {allBooks, allReaders} from 'app/shared/data';
import {Book} from 'app/models/book';
import {Reader} from 'app/models/reader';
import {LoggerService} from './logger.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {BookTrackerError} from '../../models/bookTrackerError';

@Injectable()
export class DataService {

  mostPopularBook: Book = allBooks[0];

  private static handleError(error: HttpErrorResponse): Observable<BookTrackerError> {
    const dataError = new BookTrackerError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occurred retrieving data.';
    return throwError(dataError);
  }

  constructor(private loggerService: LoggerService,
              private http: HttpClient) {
  }

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAuthorRecommendation(readerID: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (readerID > 0) {
          resolve('Dr. Seuss');
        } else {
          reject('Invalid reader ID');
        }
      }, 2000);
    })
  }

  getAllReaders(): Observable<Reader[] | BookTrackerError> {
    return this.http.get<Reader[]>('/api/readers')
      .pipe(
        catchError(DataService.handleError)
      );
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks(): Book[] {
    return allBooks;
  }

  getBookById(id: number): Book {
    return allBooks.find(book => book.bookID === id);
  }
}
