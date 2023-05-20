import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MovieComponent } from './movie/movie.component';
import { CartoonsComponent } from './cartoons/cartoons.component';
import { CountriesComponent } from './countries/countries.component';


@NgModule({
  imports: [WelcomeRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NzCardModule,
    NzGridModule
  ],
    
  declarations: [WelcomeComponent, ProductsComponent, MovieComponent, CartoonsComponent, CountriesComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
