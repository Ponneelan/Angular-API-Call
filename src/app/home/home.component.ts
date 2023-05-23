import { Component,OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public data:any = [];
  constructor (public apiService:ApiCallService){}
  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (response:any)=>{
        console.log(response);
        this.data = response;
      },
      (error:any)=>{
        console.log(error)
      }
    );
  }
}
