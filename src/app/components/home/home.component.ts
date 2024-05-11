import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  category:any
  constructor(private cate:CategoryService){
    this.cate.getcatogery().subscribe(data=>{
      this.category=data
      console.log(this.category.data)

    })

  }

}
