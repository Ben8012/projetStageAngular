import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Article} from '../models/article';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categories';

const apiLink="http://localhost:3000/article"

@Injectable({
  providedIn: 'root'
})
export class ApiArticleService {

  constructor(
    private http:HttpClient
  ) { }

  getAllArticle():Observable<Article[]>{
    return this.http.get<Article[]>(apiLink);
  }

  getArticleByID(id : number):Observable<Article>{
    return this.http.get<Article>(apiLink+id);
  }

  addArticle(addArticle : Article):Observable<Article>{
    return this.http.post<Article>(apiLink, addArticle);
  }

  updateArticle(id: number, updatedArticle : Article): Observable<Article>{
    return this.http.patch<Article>(apiLink+id, updatedArticle);
  }

  removeArticle(id : number){
    return this.http.delete(apiLink+id);
  }

  softDeleteArticle(id : number){
    return this.http.delete(apiLink+id);
  }

  restoreArticle(id : number){
    return this.http.get(apiLink+id);
  }


  /// categories ///

  getAllCategories():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(apiLink+'/categories');
  }
}
