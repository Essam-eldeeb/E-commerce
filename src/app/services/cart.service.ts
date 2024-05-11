import { Injectable } from '@angular/core';
import { MainFunctionsApiService } from './main-functions-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  optionHeader:any
  Token

url='https://ecommerce.routemisr.com/api/v1/cart'
  constructor(private cart:MainFunctionsApiService,private http:HttpClient) {

    this.Token=localStorage.getItem('token')

    this.optionHeader={
      headers:new HttpHeaders({
        'Token':`${this.Token}`



      })

    }
    // this.optionHeader = new HttpHeaders().set('Authorization', `Bearer ${this.Token}`);

    // this.Token=localStorage.getItem('token')
    // this.optionHeader=new HttpHeaders().set('Authorization', this.Token)


  }
  addtocart(productId:any){
    return this.http.post(this.url,productId).subscribe((data)=>{
      console.log(productId)
    })


  }
}
