import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Products_List } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products_list: Products_List[];

  constructor(private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductData().subscribe( res => this.products_list = res );
  }

  gotoProductDetail(product) {
    this.router.navigate(["/product", product.id]);
  }
}