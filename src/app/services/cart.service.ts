// cart.service.ts

import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartitems:product[]=[];
  addItemtoCart(product:product){
    this.cartitems.push(product);
  }           

  getItems(){
    return of(this.cartitems);
  }

  getlength(){
    return this.cartitems.length;
  }

  getTotal(){
    let total=0;
    for(let i=0;i<this.cartitems.length;i++){
      total+=this.cartitems[i].productPrice;
    }
    return total;
  }

  deleteitem(prod:product){
    let res=this.cartitems.findIndex(p=>p.productId==prod.productId);
    this.cartitems.splice(res,1)
  }
  buynow(prod:product){
    let res=this.cartitems.findIndex(p=>p.productId==prod.productId);
    this.cartitems.splice(res,1)
  }
  removeAll(){
    this.cartitems.splice(0,this.cartitems.length)

    
  }
}
