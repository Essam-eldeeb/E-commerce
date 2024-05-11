import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { catchError } from 'rxjs';
import { Token } from '@angular/compiler';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin:FormGroup
  error?:string
constructor(private funLogin:LoginService , private routr:Router){
  this.formLogin=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])

  })

}
login(){
   this.funLogin.login(this.formLogin.value) .pipe(
    catchError(error => {
      console.log('An error occurred:', error.error.errors.msg);
      return( this.error= error.error.errors.msg)
    })
  ).subscribe((respons:any)=>{
    if(respons.message=="success"){
       console.log(respons.token)
       localStorage.setItem("token",respons.token)
       this.routr.navigateByUrl('/products')

    }else{
      this.error
    }
  })
}
}
