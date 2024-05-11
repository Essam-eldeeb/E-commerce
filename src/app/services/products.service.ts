import { Injectable } from '@angular/core';
import { MainFunctionsApiService } from './main-functions-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
url_products='https://ecommerce.routemisr.com/api/v1/products'
  constructor(private getproduct:MainFunctionsApiService) { }

  getAllProducts(){
    return this.getproduct.get(this.url_products)
  }
}
