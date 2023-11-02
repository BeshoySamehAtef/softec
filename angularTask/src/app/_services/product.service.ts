import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, retry, throwError } from 'rxjs';
import { Product } from '../_models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // call get products list
  getProducts(): Observable<any[]> {
    return this.http
      .get<any[]>(`assets/data/porducts`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getProductById(id: number) {
    return this.getProducts().pipe(map((data: any[]) => {
      let returnedProduct = data.find(product => {
        return product.ProductId === id;
      })
      return returnedProduct;
    }))
  }

  editProductQuantity(productId: number, quantity: number): Observable<any> {
    return this.getProducts().pipe(map((data: any[]) => {
      const updatedData = data.map(product => {
        if (product.ProductId === productId) {
          product.AvailablePieces = quantity;
        }
        return product;
      });

      return updatedData;
    }));
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
