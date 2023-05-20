import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.sampleapis.com/movies/classic';
  private cartoonsUrl = 'https://api.sampleapis.com/cartoons/cartoons2D';
  private countries = 'https://api.sampleapis.com/countries/countries';
  constructor(private http: HttpClient) {}

  getclassic() {
    return this.http.get(this.apiUrl);
  }

  getcartoons(){
    return this.http.get(this.cartoonsUrl);
  }

  getcountries(){
    return this.http.get(this.countries);
  }
}
