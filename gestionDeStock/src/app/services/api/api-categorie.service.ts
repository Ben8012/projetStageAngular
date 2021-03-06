import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../../models/categorie/categories';

const apiLink="http://localhost:3000/categorie/"

@Injectable({
  providedIn: 'root'
})
export class ApiCategorieService {

  constructor(
    private http:HttpClient
  ) { }

  getAllCategories():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(apiLink);
  }

  
  addCategorie(addCategorie : Categorie):Observable<Categorie>{
    console.log(addCategorie)
    return this.http.post<Categorie>(apiLink, addCategorie);
  }

  deleteCategorie(id : number):Observable<Categorie[]>{
    return this.http.delete<Categorie[]>(apiLink+id)
  } 

}
