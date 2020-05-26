import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { AddReviewComponent } from './add-review/add-review.component';


const routes: Routes = [
  { path: "", component:HomeComponent},
  { path: "products", component:ListProductComponent},
  { path: "products/new", component:AddProductComponent},
  { path: "products/:id", component:ShowProductComponent},
  { path: "products/:id/review/:id", component:AddReviewComponent},
  { path: "products/edit/:id", component:EditProductComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
