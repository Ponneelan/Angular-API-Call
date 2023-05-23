import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Replace with your actual API endpoint
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(this.apiUrl);
  }
}
