import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[]

  public bool: boolean = true

  constructor(
    private http: HttpClient
  ) {
    
  }

  ngOnInit(): void {
    this.getProducts().subscribe(res => {
      this.products = res
      console.log(this.products)
    })
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3001/products")
  }

}
