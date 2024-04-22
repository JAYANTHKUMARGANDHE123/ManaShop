// products.component.ts

import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { product } from '../services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private service:ProductService, private cart:CartService,private router:Router){}
  products:any;
  ngOnInit(){
    this.service.getProducts().subscribe((result)=>{
    this.products=result;
    console.log(this.products);
    }
    )
  }

  addtoCart(pro:product){
    this.cart.addItemtoCart(pro);
    alert("your product has been added to cart");
  }

  viewProduct(proId:any){
  
    this.router.navigate(['/user/view-product',proId]);
  }

  filteredProducts: any[] = [];
  searchQuery: string = '';
  searchProducts() {
    if (this.searchQuery.trim() === '') {
      this.filteredProducts = this.products;
    } else {
      const lowercaseQuery = this.searchQuery.toLowerCase();
      this.filteredProducts = this.products.filter((product:any) =>
        product.productName.toLowerCase().includes(lowercaseQuery) ||
        product.productCompany.toLowerCase().includes(lowercaseQuery)
      );
    }
  }
  
}
