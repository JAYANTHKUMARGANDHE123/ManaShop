//  login.component.ts


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:any;
  password:any;
  user:any;
  

  constructor(private route:Router){}

  
  checkLogin(){
    this.user={
      username:this.username,
      password:this.password
    }
    if(this.username=="admin"&&this.password=="12345"){
      this.route.navigateByUrl('/admin/home');
      localStorage.setItem('user',JSON.stringify(this.user))
    }
    else if(this.password== (this.username+"123")){
      this.route.navigateByUrl('/user/home');
      localStorage.setItem('user',JSON.stringify(this.user))
    }
    else{
      alert('Invalid Credentials')
    }
  }
}
