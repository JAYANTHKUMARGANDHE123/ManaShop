// userdashboard.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {

user:any;
username:any;
cartlength:any;

constructor(private route:Router, private service:CartService){}

ngDoCheck(){
  this.cartlength=this.service.getlength();
}

ngOnInit(){
  if(localStorage.getItem('user')!=null){
    this.user=JSON.parse(localStorage.getItem('user')||"{}");
    this.username=this.user.username;
  }
  else{
    this.route.navigateByUrl("/");
  }
}
}
