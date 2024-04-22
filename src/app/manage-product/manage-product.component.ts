// manage-product.component.ts 

import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.css'
})
export class ManageProductComponent {
constructor(private service:ProductService){}

delete(p:any){
  this.service.deleteProduct(p);
  alert("Product deleted successfully")
}

toSave(p:any){
  p.productEdit=false;
  this.service.updateProduct(p);
  alert('product updated successfully');
}

toUpdate(p:any){
  p.productEdit=true;
}

products:any;
ngOnInit(){
  this.service.getProducts().subscribe((res)=>{
    this.products=res;
  });
}
}
