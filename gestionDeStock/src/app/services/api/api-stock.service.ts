import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Stock } from '../../models/stock/stock';
import { Observable } from 'rxjs';


const apiLink="http://localhost:3000/stock/"

@Injectable({
  providedIn: 'root'
})
export class ApiStockService {

  constructor(
    private http:HttpClient
  ) { }

  
  getAllStocks():Observable<any[]>{
    return this.http.get<any[]>(apiLink+'getallstocks');
  }

 

 

}
