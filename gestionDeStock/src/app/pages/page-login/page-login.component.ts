import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/models/auth/authentication-request';
import { ApiUtilisateurService } from 'src/app/services/api-utilisateur.service';
import { UserSessionService } from 'src/app/services/user_session/user-session.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  authenticationRequest: AuthenticationRequest = {};
  errorMessage = '';
  public formConnexion : any

  constructor(
    private formBuilber: FormBuilder,
    private apiUtilisateurService : ApiUtilisateurService,
    private router: Router,
    private userSessionService : UserSessionService
  ) { }

  ngOnInit(): void {

    this.formConnexion = this.formBuilber.group({
      
      email :['loic@mail.com',[Validators.required]],
      passwd :['test',[Validators.required]],
     
    })
  }

  login(){
    if(this.formConnexion.valid){
      this.apiUtilisateurService.login(this.formConnexion.value)
        .subscribe((data :any) =>{
          this.userSessionService.saveSession(data.token)
           // console.log(data)         
          this.router.navigate(['']);
        }, error => {
          alert("Mot de passe invalide");
          this.errorMessage = 'Login et / ou mot de passe incorrecte';
        }) ;
    }
  }

 
}
