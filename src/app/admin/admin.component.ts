import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public product: Product = {
    "title": "",
    "description": "",
    "price": undefined,
    "picture": ""
  }
  
  constructor(
    private http: HttpClient
  ) {
    
  }

  ngOnInit(): void {

  }
  
  mudaNome() {
    
  }

  newProduct(product: Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:3001/products", product)
  }

  createProduct(){
    this.newProduct(this.product).subscribe(res => {
      console.log('Resposta', res)
    })
  }

}
