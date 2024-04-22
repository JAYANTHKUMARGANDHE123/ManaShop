// product.service.ts
import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  ProductList:product[]=[
    // Mobile objects
    {
      productId:22,
      productName:"Galaxy S21",
      productCompany:"Samsung",
      productDescription:" Cutting-edge smartphone with advanced camera features Mobile from Samsung",
      productPrice:120000,
      productImage:"https://phonesdata.com/files/models/Samsung-Galaxy-S21-Ultra-5G-821.jpg",
      productType:"Mobile",
      productEdit:false
    },
    {
      productId:23,
      productName:"iPhone 13",
      productCompany:"Apple",
      productDescription:"Latest iPhone model with n number of advanced features and tech",
      productPrice:122999,
      productImage:"https://th.bing.com/th/id/OIP.TLXfkuJQmqn5BLfI5YGI5AHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7",
      productType:"Mobile",
      productEdit:false
    },
    {
      productId:2,
      productName:"Galaxy S24",
      productCompany:"Samsung",
      productDescription:" Cutting-edge smartphone with advanced camera features and 5G connectivity.",
      productPrice:129999,
      productImage:"https://th.bing.com/th/id/OIP.W_qcygjLwgkCNluKSAVDMwAAAA?rs=1&pid=ImgDetMain",
      productType:"Mobile",
      productEdit:false
    },
    {
      productId:26,
      productName:"Google Pixel 7 Pro",
      productCompany:"Google",
      productDescription:" Flagship Android phone with exceptional camera capabilities and seamless Google services.",
      productPrice:18999,
      productImage:"https://th.bing.com/th/id/OIP.wLV8sPipYeQlvPFubxreQwAAAA?rs=1&pid=ImgDetMain",
      productType:"Mobile",
      productEdit:false
    },
    {
      productId:222,
      productName:"OnePlus 10T",
      productCompany:"Oneplus",
      productDescription:"Mobile High-performance smartphone with a sleek design and fast charging support.",
      productPrice:120000,
      productImage:"https://specificationsplus.com/wp-content/uploads/2022/07/OnePlus-10T-Specifications-Plus.jpg",
      productType:"Mobile",
      productEdit:false
    },
    {
      productId:12,
      productName:"Narzo 50A",
      productCompany:"Realme",
      productDescription:"mobile with HelioG85 processor,camera feeatured with 4G support, 128GB internal storage",
      productPrice:122999,
      productImage:"https://m.media-amazon.com/images/I/81Ke5qtC6oL._SL1500_.jpg",
      productType:"Mobile",
      productEdit:false
    },
    // Laptop objects
    {
      productId:1,
      productName:"MacBook Pro",
      productCompany:"Apple",
      productDescription:"Powerful laptop from Apple with macos support with high end tech with cutting edge tech.",
      productPrice:199995,
      productImage:"/assets/lap-1.jpg",
      productType:"Laptop",
      productEdit:false
    },   
    {
      productId:5,
      productName:" Dell XPS 15",
      productCompany:"Dell",
      productDescription:"Premium ultrabook with  4K OLED display, powerful performance, and sleek design.",
      productPrice:199995,
      productImage:"/assets/lap-6.jpg",
      productType:"Laptop",
      productEdit:false
    },
    {
      productId:10,
      productName:"TUF Gaming",
      productCompany:"Asus",
      productDescription:"Powerful gaming laptop from Asus with high performance.",
      productPrice:52995,
      productImage:"/assets/lap-3.jpg",
      productType:"Laptop",
      productEdit:false
    },
    { 
      productId:21,
      productName:"ThinkPad Gen10",
      productCompany:"Lenovo",
      productDescription:"Business-class laptop with robust security features, excellent keyboard, and lightweight design.",
      productPrice:199995,
      productImage:"/assets/lap-4.jpg",
      productType:"Laptop",
      productEdit:false
    },
    { 
      productId:18,
      productName:" Spectre x360 14",
      productCompany:"HP",
      productDescription:"Convertible laptop with a touch-enabled display,with a long battery life, and premium build quality and 180 degree screen rotate.",
      productPrice:199995,
      productImage:"/assets/lap-5.jpg",
      productType:"Laptop",
      productEdit:false
    },
    { 
      productId:29,
      productName:"Surface Laptop 3",
      productCompany:"Microsoft",
      productDescription:"Powerful laptop from Microsoft is a mini laptop with touch support from Microsoft with microsoft 365 with all windows support.",
      productPrice:199995,
      productImage:"/assets/lap-2.jpg",
      productType:"Laptop",
      productEdit:false
    },
    // TV objects
    {
      productId:30,
      productName:"The Premiere 8K",
      productCompany:"Samsung",
      productDescription:"Flagship 8K projector with wireless streaming, 150-inch image projection, and built-in Dolby Atmos sound.",
      productPrice:199995,
      productImage:"https://lemondenumerique-media.ouest-france.fr/wp-content/uploads/2024/01/Samsung_the_premiere_8K_press1_intro.jpg",
      productType:"Tv",
      productEdit:false
    },
    {
      productId:31,
      productName:"The Premiere 8K",
      productCompany:"Samsung",
      productDescription:"Flagship 8K projector with wireless streaming, 150-inch image projection, and built-in Dolby Atmos sound.",
      productPrice:199995,
      productImage:"https://lemondenumerique-media.ouest-france.fr/wp-content/uploads/2024/01/Samsung_the_premiere_8K_press1_intro.jpg",
      productType:"Tv",
      productEdit:false
    },
    {
      productId:32,
      productName:"The Premiere 8K",
      productCompany:"Samsung",
      productDescription:"Flagship 8K projector with wireless streaming, 150-inch image projection, and built-in Dolby Atmos sound.",
      productPrice:199995,
      productImage:"https://lemondenumerique-media.ouest-france.fr/wp-content/uploads/2024/01/Samsung_the_premiere_8K_press1_intro.jpg",
      productType:"Tv",
      productEdit:false
    },
    {
      productId:33,
      productName:"The Premiere 8K",
      productCompany:"Samsung",
      productDescription:"Flagship 8K projector with wireless streaming, 150-inch image projection, and built-in Dolby Atmos sound.",
      productPrice:199995,
      productImage:"https://lemondenumerique-media.ouest-france.fr/wp-content/uploads/2024/01/Samsung_the_premiere_8K_press1_intro.jpg",
      productType:"Tv",
      productEdit:false
    },
    {
      productId:34,
      productName:"Signature OLED T",
      productCompany:"LG",
      productDescription:"Transparent TV with a practical screen, wireless 4K HDR streaming, and a clear 4K OLED panel.",
      productPrice:199995,
      productImage:"https://lemondenumerique-media.ouest-france.fr/wp-content/uploads/2024/01/Samsung_the_premiere_8K_press1_intro.jpg",
      productType:"Tv",
      productEdit:false
    },
    {
      productId:35,
      productName:"The Premiere 8K",
      productCompany:"Samsung",
      productDescription:"Flagship 8K projector with wireless streaming, 150-inch image projection, and built-in Dolby Atmos sound.",
      productPrice:199995,
      productImage:"https://lemondenumerique-media.ouest-france.fr/wp-content/uploads/2024/01/Samsung_the_premiere_8K_press1_intro.jpg",
      productType:"Tv",
      productEdit:false
    },
  ]

  getProducts(){
    return of(this.ProductList);
  }
  addProduct(product:product){
    this.ProductList.push(product);
  }

  deleteProduct(prod:product){
    let res=this.ProductList.findIndex(p=>p.productId==prod.productId);
    this.ProductList.splice(res,1)
  }

  updateProduct(prod:product){
    let res=this.ProductList.findIndex(p=>p.productId==prod.productId);
    this.ProductList.splice(res,1,prod) 
  }
}
