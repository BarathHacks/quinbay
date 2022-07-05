import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';

const routes: Routes = [
  { path: 'product', component: ProductCardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'notfound', component: ProductNotFoundComponent },
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
