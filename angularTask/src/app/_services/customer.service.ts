import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http: HttpClient) { }

  // get customers list
  getCustomers(): Observable<any[]> {
    return this.http
      .get<any[]>(`assets/data/users`)
      .pipe(retry(1), catchError(this.handleError));
  }

  // get customer by id 
  getCustomerById(id: string) {
    return this.getCustomers().pipe(map((data: any[]) => {
      let returnedCustomer = data.find(customer => {
        return customer.Id === id;
      })
      return returnedCustomer;
    }))
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
