import { Injectable, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainFunctionsApiService } from './main-functions-api.service';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
url_login='https://ecommerce.routemisr.com/api/v1/auth/signin';
isUserLogin:BehaviorSubject<boolean>

  constructor(private logfunction:MainFunctionsApiService) {
    this.isUserLogin=new BehaviorSubject(this.islogin)
    console.log(this.isUserLogin);

   }
   login(object:any):Observable<any>{
   return this.logfunction.post(this.url_login,object) ||
    this.isUserLogin.next(true)

   }


 get islogin(){
    return (localStorage.getItem('token'))?true:false;
   }
   OnInit(){

    }

 logOut(){
  localStorage.removeItem('token')
  this.isUserLogin.next(false)
}

isuserLoginSubject(){
  return this.isUserLogin
}
}
