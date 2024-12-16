import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { AddProductComponentComponent } from './products-component/add-product-component/add-product-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [
  { path: 'navBar', component: NavBarComponentComponent },
  { path: 'produit', component: ProductsComponentComponent },
  { path: 'add/produit', component: AddProductComponentComponent },
  {path:'**',component:NotFoundComponentComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
