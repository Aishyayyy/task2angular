import { ProductService } from './../product.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private http:HttpClient,private activateRoute:ActivatedRoute,private detailsservice:ProductService) { }
  prod_id:any
  product_details:any
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params:any)=>{
      this.prod_id=params.product_id
    this.detailsservice.pro_details(this.prod_id).
    subscribe((Response:any)=>{ this.product_details=Response}) 
    
    })
  }

 

}
