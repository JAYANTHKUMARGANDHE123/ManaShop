// mobiles.component.ts
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrl: './mobiles.component.css'
})
export class MobilesComponent {

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
