import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Utilisateur } from '../models/utilisateur';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../models/auth/authentication-request';
import { AuthenticationResponse } from '../models/auth/authentication-response';
import { ChangerMotDePasseUtilisateur } from '../models/changer-mot-de-passe-utilisateur-dto';


const apiLink="http://localhost:3000/utilisateur"

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

  login(login : AuthenticationRequest):Observable<AuthenticationResponse>{
    return this.http.post<AuthenticationResponse>(apiLink+'/login',login)
  }

  getUserByEmail(email?: string): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(apiLink,email);
  }

  changerMotDePasse(changerMotDePasse: ChangerMotDePasseUtilisateur): Observable<ChangerMotDePasseUtilisateur> {
    return this.http.post<ChangerMotDePasseUtilisateur>(apiLink,changerMotDePasse);
  }



}
