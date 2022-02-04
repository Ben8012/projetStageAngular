import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Article} from '../../models/article/article';
import { Observable } from 'rxjs';
import { Categorie } from '../../models/categorie/categories';
import { AjoutPanier } from '../../models/article/ajoutPanier';

const apiLink="http://localhost:3000/commande"

@Injectable({
  providedIn: 'root'
})
export class ApiCommandeService {

  constructor(
    private http:HttpClient
  ) { }

  
  ajouterPanier(ajouterPanier : AjoutPanier){
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

  validerToutCommande( allCommandeId : number[],userId : number):Observable<any[]>{
    console.log('test')
    return this.http.post<any[]>(apiLink+'/validertoutcommande/'+userId,allCommandeId)
  }
 
  getCommandeToDo(userId : number):Observable<any[]>{
     return this.http.get<any[]>(apiLink+'/getcommandetodo/'+userId)
   }

   commandePrete(id : number, userId : number):Observable<any[]>{
    return this.http.get<any[]>(apiLink+'/commandeprete/'+id+'/'+userId)
  }

  commandeRecue(id : number, userId : number):Observable<any[]>{
    return this.http.get<any[]>(apiLink+'/commanderecue/'+id+'/'+userId)
  }

}
