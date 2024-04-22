// admindashboard.component.ts


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

user:any;
username:any;

constructor(private route:Router){}

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
