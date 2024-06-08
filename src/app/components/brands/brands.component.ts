import { Component } from '@angular/core';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
allbrand:any
constructor( private getbrands:BrandsService){
 this.getbrands.allbrands().subscribe(
  (data)=>{
    this.allbrand=data
  }
 )
}


}
