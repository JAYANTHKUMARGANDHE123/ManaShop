// tvs.component.ts
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrl: './tvs.component.css'
})
export class TvsComponent {
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
