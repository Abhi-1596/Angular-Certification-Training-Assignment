import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './service/product.service';

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  providers: [
    ProductService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }