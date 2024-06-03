import { Injectable } from '@angular/core';
import { MainFunctionsApiService } from './main-functions-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  optionHeader: any;
  Token: any;
  headers: any;
  url = 'https://ecommerce.routemisr.com/api/v1/cart';
  numOfProducts: BehaviorSubject<number> = new BehaviorSubject(0);
  userToken: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private cart: MainFunctionsApiService, private http: HttpClient) {
    this.Token = localStorage.getItem('token');
    this.optionHeader = {
      headers: new HttpHeaders({
        'Token': `${this.Token}`
      })
    };

    this.userToken.next(localStorage.getItem('token'));

    this.userToken.subscribe({
      next: (x) => {
        this.headers = x;
        this.getCart().subscribe({
          next: (res: any) => this.numOfProducts.next(res?.numOfCartItems),
        });
      }
    });
  }

  addToCart(productId: any) {
    return this.http.post(this.url, { productId }, this.optionHeader);
  }

  getCart() {
    return this.http.get(this.url, this.optionHeader);
  }

  updateCount(id: any, count: any) {
    return this.http.put(`${this.url}/${id}`, count, this.optionHeader);
  }

  delete(id: any) {
    return this.http.delete(`${this.url}/${id}`, this.optionHeader);
  }

  deleteAll() {
    return this.http.delete(`${this.url}`, this.optionHeader);
  }
}
