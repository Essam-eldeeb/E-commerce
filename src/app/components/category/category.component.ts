import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

lisOfcat:any
  constructor(private _categroy:CategoryService){
    this._categroy.getcatogery().subscribe(
      (data)=>{
        this.lisOfcat=data
        console.log(data)
      }
    )
  }


}
