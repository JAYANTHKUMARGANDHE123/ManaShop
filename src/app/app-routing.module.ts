// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TvsComponent } from './tvs/tvs.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
   children:[
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'cart',component:CartComponent}
   ]
},
{path:'admin',component:AdmindashboardComponent,
children:[
  {path:'home',component:HomeComponent},
  {path:'add',component:AddproductsComponent},
  {path:'products',component:ProductsComponent},
  {path:'view',component:ViewusersComponent},
  {path:'mobile',component:MobilesComponent},
  {path:'laptop',component:LaptopsComponent},
  {path:'tvs',component:TvsComponent},
  {path:'manage',component:ManageProductComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
