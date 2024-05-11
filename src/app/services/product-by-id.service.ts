import { Injectable } from '@angular/core';
import { MainFunctionsApiService } from './main-functions-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductByIdService {
url='https://ecommerce.routemisr.com/api/v1/products'
  constructor(private funId:MainFunctionsApiService) { }

  getById(id:any){
   return  this.funId.getById(this.url,id)
  }
}
