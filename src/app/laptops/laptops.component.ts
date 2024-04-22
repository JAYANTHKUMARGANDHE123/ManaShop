// laptops.component.ts


import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class LaptopsComponent {

  constructor(private service:ProductService){}
  products:any;
  ngOnInit(){
    this.service.getProducts().subscribe((result)=>{
    this.products=result;
    console.log(this.products);
    }
    )
  }
}
