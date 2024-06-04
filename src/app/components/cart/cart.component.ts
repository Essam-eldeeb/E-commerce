import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  totalPrice: any;
  totalcount: any;
  cartproduct: any = [];

  constructor(private cart: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart.getCart().subscribe((res: any) => {
      this.cart.numOfProducts.next(res.numOfCartItems);
      this.cartproduct = res?.data?.products
      this.totalPrice = res?.data.totalCartPrice;
      this.totalcount =res?.numOfCartItems;
    });
  }

  updateItem(id: any, count: number) {
    if (count === 0) {
      this.removeItem(id);
    } else {
      this.cart.updateCount(id, { count }).subscribe((res: any) => {
        this.cart.numOfProducts.next(res.numOfCartItems);
        this.cartproduct = res?.data?.products;
        this.totalPrice = res?.data.totalCartPrice;
        this.totalcount = res?.numOfCartItems;
      });
    }
  }

  removeItem(id: any) {
    this.cart.delete(id).subscribe((res:any) => {
      this.cartproduct = res?.data?.products;
      this.totalPrice = res?.data.totalCartPrice;
      this.totalcount = res?.numOfCartItems;
      this.cart.numOfProducts.next(res?.numOfCartItems);

    });
  }

  deleteAll() {
    this.cart.deleteAll().subscribe((res: any) => {
      this.cart.numOfProducts.next(0);
      this.cartproduct = [];
      this.totalPrice = 0;
      this.totalcount = 0;
    });
  }
}
