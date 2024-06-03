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
item:any
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
    return this.http.post(this.url,{productId},this.optionHeader)

  }
  getcart(){
    return this.http.get(this.url,this.optionHeader)


  }
  updatecount(id:any ,count:any){
    return this.http.put(`${this.url}/${id}`,count,this.optionHeader)
  }
  delete(id:any){
    return this.http.delete(`${this.url}/${id}`,this.optionHeader)
  }
  deleteall(){
    return this.http.delete(`${this.url}`,this.optionHeader)
  }
  }
