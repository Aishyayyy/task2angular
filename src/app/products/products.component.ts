import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private prodservice:ProductService) { }
  prod_list:any
  ngOnInit(): void {

    this.prodservice.product()
    this.prodservice.product().subscribe(
      (response:any)=>{this.prod_list=response
        console.log(response)}, 
      (error:any)=>{console.log(error)
    });
  }

  
}
