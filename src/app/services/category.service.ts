import { Injectable } from '@angular/core';
import { MainFunctionsApiService } from './main-functions-api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
url='https://ecommerce.routemisr.com/api/v1/categories'
  constructor(private category:MainFunctionsApiService)
  { }
  getcatogery(){
    return this.category.get(this.url)
  }
}
