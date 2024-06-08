import { CanActivateFn, GuardResult, Router, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
import { Observable, map } from 'rxjs';
let authCheck: boolean | UrlTree | Observable<GuardResult> | Promise<GuardResult>

export const authGuard: CanActivateFn = (route, state) => {
  inject(LoginService).isUserLogin.subscribe(
    (data)=>{
      authCheck=data
      if(authCheck==true){
         true
      }else{
        false
        inject(Router).navigateByUrl('/login')
      }
    }
  )
  return authCheck
};
