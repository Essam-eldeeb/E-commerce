import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LoginService } from '../../services/login.service';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  numOfProducts = 0
  islogin:any
    constructor(private cartService: CartService,private loginNav: LoginService) {


   }
 logout(){
   this.loginNav.logOut()


 }
  ngOnInit() {
    this.cartService.numOfProducts.subscribe({
      next: (x) => {
        this.numOfProducts = x
      }
    })

    this.loginNav.isuserLoginSubject().subscribe(
      (data)=>{
       this.islogin=data
      }
    )
  }




}
