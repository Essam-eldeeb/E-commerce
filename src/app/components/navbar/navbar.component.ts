import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  numOfProducts = 0
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.numOfProducts.subscribe({
      next: (x) => {
        this.numOfProducts = x
      }
    })
  }


}
