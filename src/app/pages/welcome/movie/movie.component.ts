import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
 
  classic: any;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.getClassic();
  }
  getClassic(){
    this.apiService.getclassic().subscribe((res: any) => {
      
      console.log(res)
      this.classic = res;
    })
  }

 
}
