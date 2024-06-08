import { Injectable, OnInit } from '@angular/core';
import { MainFunctionsApiService } from './main-functions-api.service';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
url="https://ecommerce.routemisr.com/api/v1/brands"
  constructor(private brands:MainFunctionsApiService) {


   }

   allbrands(){
    return this.brands.get(this.url)
   }


  }

