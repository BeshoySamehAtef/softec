import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  // call get products list
  getProducts(): Observable<any[]> {
    return this.http
      .get<any[]>(`assets/data/porducts`)
      .pipe(retry(1), catchError(this.handleError));
  }

   // Error handling
   handleError(error: any) {
    const errorMessage = 'We are sorry, Something went wrong'
    console.log(errorMessage)
   
    return throwError(() => {
      return errorMessage;
    });
  }
}
