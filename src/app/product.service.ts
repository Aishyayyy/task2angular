import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  product(){
    return this.http.get(`${environment.baseUrl}products/`)
  }
  pro_details(id:any){

    return this.http.get(`${environment.baseUrl}products/${id}`)
  }
}
