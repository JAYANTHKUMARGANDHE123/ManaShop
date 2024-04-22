// cart.component.ts

import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private cart:CartService ){}

  cartitems:any;
  totalprice:any;
  cartlength:any;
  deleteitem:any;
  p:any;

  ngDoCheck(){
    this.cartlength=this.cart.getlength();
    this.totalprice=this.cart.getTotal();
  }

  ngOnInit(){
    this.cart.getItems().subscribe((res)=>{
      this.cartitems=res;
      console.log(this.cartitems);
    })
  }

  delete(p:any){
    this.cart.deleteitem(p);
    alert("cart item removed")
  }
  buy(p:any){
    this.cart.removeAll();
    Swal.fire({
      title: "Good job!",
      text: "Order placed successfully!",
      icon: "success"
    });

  }
}
