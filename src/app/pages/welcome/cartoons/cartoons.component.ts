import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.component.html',
  styleUrls: ['./cartoons.component.scss']
})
export class CartoonsComponent {
  cartoons: any;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.getcartoons();
  }
  getcartoons(){
    this.apiService.getcartoons().subscribe((res: any) => {
      
      console.log(res)
      this.cartoons = res;
    })
  }

}
