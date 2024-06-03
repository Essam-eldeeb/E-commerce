import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { catchError, retry } from 'rxjs';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../../services/cart.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
[x: string]: any;
erro:any
  allproduct:[] | undefined;
details: any;
  constructor(private product:ProductsService,private cart:CartService){
    this.product.getAllProducts().pipe(
      retry(3),
      catchError(error => {
        console.log('An error occurred:', error.error.errors.msg);
        return( this.erro= error.error.errors.msg)
      })

    ).subscribe((data:any)=>{
      this.allproduct=data.data
      console.log(data.data)

    })

  }
  //   headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization':`${this.Token}`
  // });

  addtocart(id:any){
    this.cart.addToCart(id).subscribe(
      (res:any)=>{
        this.cart.numOfProducts.next(res.numOfCartItems);

        }
    )
  }

}
