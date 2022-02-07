import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Utilisateur } from '../../models/utilisateur/utilisateur';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../../models/auth/authentication-request';
import { AuthenticationResponse } from '../../models/auth/authentication-response';
import { ChangerMotDePasseUtilisateur } from '../../models/auth/changer-mot-de-passe-utilisateur-dto';
import { UserWithAdresse } from '../../models/utilisateur/userWithAdresse';


const apiLink="http://localhost:3000/utilisateur/"

@Injectable({
  providedIn: 'root'
})
export class ApiUtilisateurService {

  constructor(
    private http:HttpClient,
    private router : Router
  ) { }

  addUtilisateur(addUtilisateur : Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>(apiLink,addUtilisateur )
  }

  addFournisseur(addFournisseur : Utilisateur){
    return this.http.post(apiLink+'addfournisseur',addFournisseur)
  }

  updateUtilisateur(id: number,upadateUtilisateur : Utilisateur): Observable<AuthenticationResponse>{
    return this.http.patch<AuthenticationResponse>(apiLink+'update/'+id,upadateUtilisateur )
  }
 
  login(login : AuthenticationRequest):Observable<AuthenticationResponse>{
    return this.http.post<AuthenticationResponse>(apiLink+'login',login)
  }

  getUserByEmail(email?: string): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(apiLink,email);
  }

  changerMotDePasse(id : number,changerMotDePasse: ChangerMotDePasseUtilisateur) {
    return this.http.patch(apiLink+'changepasswd/'+id,changerMotDePasse);
  }

  getAllClient():Observable<UserWithAdresse[]>{
    return this.http.get<UserWithAdresse[]>(apiLink+'clients');
  }

  getAllFournisseurs():Observable<UserWithAdresse[]>{
    return this.http.get<UserWithAdresse[]>(apiLink+'fournisseurs');
  }

  getAllPreparateurs():Observable<UserWithAdresse[]>{
    return this.http.get<UserWithAdresse[]>(apiLink+'preparateurs');
  }

  deleteClient(id : number){
    return this.http.delete(apiLink+'delete/'+id)
  }

  getUserById(id : any):Observable<Utilisateur>{
    return this.http.get<Utilisateur>(apiLink+'getbyid/'+id)
  }

  changeRole(id : number, changeRole : any){
    return this.http.patch(apiLink+'changerole/'+id,changeRole)
  }

  getFournisseurByArticle(articleId : number):Observable<any[]>{
    return this.http.get<any[]>(apiLink+'fournisseurbyarticleid/'+articleId)
  }
}
