import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  countries: any;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.getcountries();
  }
  getcountries(){
    this.apiService.getcountries().subscribe((res: any) => {
      
      console.log(res)
      this.countries = res;
    })
  }
}
