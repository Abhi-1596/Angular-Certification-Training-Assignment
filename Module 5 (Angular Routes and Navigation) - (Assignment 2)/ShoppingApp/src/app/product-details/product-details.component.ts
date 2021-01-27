import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products_List } from '../product/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product_Id: number;
  product: Products_List[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductData().subscribe( res => { this.product = res } );
    this.product_Id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  goBack() {
    this.router.navigate(["/product", {id: this.product_Id}]);
  }
}