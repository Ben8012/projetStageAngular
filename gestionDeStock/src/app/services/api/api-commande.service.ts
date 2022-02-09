import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Article} from '../../models/article/article';
import { Observable } from 'rxjs';
import { Categorie } from '../../models/categorie/categories';
import { AjoutPanier } from '../../models/article/ajoutPanier';
import { Commande } from 'src/app/models/commande/commande';

const apiLink="http://localhost:3000/commande/"

@Injectable({
  providedIn: 'root'
})
export class ApiCommandeService {

  constructor(
    private http:HttpClient
  ) { }

  //client
  ajouterPanier(ajouterPanier : AjoutPanier){
    return this.http.post(apiLink+'ajouterpanier',ajouterPanier);
  }

  getCommandeByUser(id : number): Observable<any[]>{
    return this.http.get<any[]>(apiLink+'commandebyid/'+id)
  }

  validerUneCommande(id : number, userId : number):Observable<any[]>{
    return this.http.get<any[]>(apiLink+'validercommande/'+id+'/'+userId)
  }

  annulerUneCommande(id : number, userId : number):Observable<any[]>{
    return this.http.get<any[]>(apiLink+'annulercommande/'+id+'/'+userId)
  }

  validerToutCommande( allCommandeId : number[],userId : number):Observable<any[]>{
    console.log('test')
    return this.http.post<any[]>(apiLink+'validertoutcommande/'+userId,allCommandeId)
  }

  commandeRecue(id : number, userId : number):Observable<any[]>{
    return this.http.get<any[]>(apiLink+'commanderecue/'+id+'/'+userId)
  }
 
  // preparateur
  getCommandeToDo(userId : number):Observable<any[]>{
     return this.http.get<any[]>(apiLink+'getcommandetodo/'+userId)
   }
 
   commandePrete(userId : number, commandeId : number, quantite : number):Observable<any[]>{
     //console.log(quantite)
    return this.http.get<any[]>(apiLink+'commandeprete/'+userId+'/'+commandeId+'/'+quantite)
  }


  validerToutCommandePret( allCommandeId : number[],userId : number):Observable<any[]>{
    //console.log('test')
    return this.http.post<any[]>(apiLink+'validertoutcommandepret/'+userId,allCommandeId)
  }

  //fournisseur
  getAllCommandeFournisseur():Observable<any[]>{
    console.log('test')
    return this.http.get<any[]>(apiLink+'getallCommandefournisseur')
  }

}
