import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { ProductsComponent } from './products/products.component';
import { MovieComponent } from './movie/movie.component';
import { CartoonsComponent } from './cartoons/cartoons.component';
import { CountriesComponent } from './countries/countries.component';
const routes: Routes = [
  { path: 'dashboard', component: WelcomeComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'movie',   component:MovieComponent},
  { path: 'cartoons', component:CartoonsComponent},
  { path: 'countries', component:CountriesComponent},
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
