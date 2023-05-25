import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private apiUrl = 'http://localhost:3000/getall'; // Replace with your actual API endpoint
  constructor(private http: HttpClient) { }
  getData(){
     return this.http.get(this.apiUrl);
  }
}
