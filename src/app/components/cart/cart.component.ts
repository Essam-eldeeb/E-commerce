import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  totalPrice:any
  totalcount:any
  cartproduct:any=[]
constructor(private Cart:CartService,private rout:Router){
this.Cart.getcart().subscribe(res=>{
  this.cartproduct=res
  this.totalPrice=this.cartproduct.data.totalCartPrice
  this.totalcount= this.cartproduct.numOfCartItems
})
}

updateIten(id: any,count: number) {
  if(count==0){
    this.removeItem(id)
  }else{
    this.Cart.updatecount(id,{count}).subscribe(res=>{
    this.cartproduct=res
    this.totalPrice=this.cartproduct.data.totalCartPrice
    this.totalcount= this.cartproduct.numOfCartItems
    })


  }
  }
removeItem(id:any){
  this.Cart.delete(id).subscribe(res=>{
  //  location.reload()
  this.cartproduct=res
  this.totalPrice=this.cartproduct.data.totalCartPrice
  this.totalcount= this.cartproduct.numOfCartItems

  })
}
deleteAll(){
    this.Cart.deleteall().subscribe(
      (res:any)=>{
        this.cartproduct=[]
        this.totalPrice=0
        this.totalcount=0
        console.log(res)

      }
    )
}
ngOnInit(): void {


}
}
