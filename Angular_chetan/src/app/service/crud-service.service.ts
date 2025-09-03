import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from '../user-data';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
 
  baseUrl: string = 'http://localhost:3000/user'
  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get<UserData[]>(this.baseUrl);
  }
 
}
