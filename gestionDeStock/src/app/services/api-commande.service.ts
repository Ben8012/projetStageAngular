import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Article} from '../models/article/article';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie/categories';
import { AjoutPanier } from '../models/article/ajoutPanier';

const apiLink="http://localhost:3000/commande"

@Injectable({
  providedIn: 'root'
})
export class ApiCommandeService {

  constructor(
    private http:HttpClient
  ) { }

  
  ajouterPanier(ajouterPanier : AjoutPanier){
      console.log(ajouterPanier)
    return this.http.post(apiLink+'/ajouterpanier',ajouterPanier);
  }

  getCommandeByUser(id : number): Observable<any[]>{
    return this.http.get<any[]>(apiLink+'/commandebyid/'+id)
  }

  validerUneCommande(id : number, userId : number):Observable<any[]>{
    return this.http.get<any[]>(apiLink+'/validercommande/'+id+'/'+userId)
  }

  annulerUneCommande(id : number, userId : number):Observable<any[]>{
    return this.http.get<any[]>(apiLink+'/annulercommande/'+id+'/'+userId)
  }

}
