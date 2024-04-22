// addproducts.component.ts


import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {

productId:any;
productName:any;
productCompany:any;
productPrice:any;
productDescription:any;
productImage:any;
productType:any;
newproduct:any;

constructor(private service:ProductService,private router:Router){}

addproduct(){
  this.newproduct={
   productId:this.productId,
   productName:this.productName,
   productCompany:this.productCompany,
   productDescription:this.productDescription,
   productImage:this.productImage,
   productType:this.productType,
  }
  this.service.addProduct(this.newproduct);
  Swal.fire({
    title:"success",
    text:"product added successfully",
    icon:"success"
  })
  
  this.router.navigateByUrl('/admin/laptop');   
}


}
