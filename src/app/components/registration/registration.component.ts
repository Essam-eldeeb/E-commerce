import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainFunctionsApiService } from '../../services/main-functions-api.service';
import { RegistrationService } from '../../services/registration.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl:'./registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
registrationform:any
  errormessage?: any;
constructor(public fb:FormBuilder, private apiRegistr:RegistrationService,private route:Router){
  this.registrationform=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),

     email:new FormControl('',[Validators.required,Validators.email]),

     password:new FormControl('',[Validators.required,Validators.minLength(8)]),
     rePassword:new FormControl('',[Validators.required,Validators.minLength(8)]),
     phone:new FormControl('',[Validators.required,])
   })

}
signUp(){
 this.apiRegistr.create(this.registrationform.value) .pipe(
  catchError(error => {
    console.log('An error occurred:', error.error.errors.msg);
    return( this.errormessage= error.error.errors)
  })
)


  .subscribe((respons:any)=>{
     if(respons.message=="success"){
        this.route.navigateByUrl('/login')
     }
  })

}

}


