import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Products_List } from "../product/product.model";

@Injectable()

export class ProductService {
    private productUrl = "../../assets/data/product_DB.json";

   constructor(private http: HttpClient) {}

   getProductData(): Observable<Products_List[]> {
       return this.http.get<Products_List[]> (this.productUrl);
   }
}