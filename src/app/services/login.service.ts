import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainFunctionsApiService } from './main-functions-api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
url_login='https://ecommerce.routemisr.com/api/v1/auth/signin';
  constructor(private logfunction:MainFunctionsApiService) {
   }
   login(object:any){
    return this.logfunction.post(this.url_login,object)
   }
}
