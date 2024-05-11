import { Injectable } from '@angular/core';
import { MainFunctionsApiService } from './main-functions-api.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url="https://ecommerce.routemisr.com/api/v1/auth/signup"

  constructor(private registr:MainFunctionsApiService) { }
  create(object:any){
     return this.registr.post(this.url,object)
  }
}
