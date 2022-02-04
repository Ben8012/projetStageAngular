import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/auth/auth-user';
import { ApiUtilisateurService } from 'src/app/services/api/api-utilisateur.service';
import { UserSessionService } from 'src/app/services/user_session/user-session.service';

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrls: ['./changer-mot-de-passe.component.scss']
})
export class ChangerMotDePasseComponent implements OnInit {

  public user= new AuthUser('')
  public formModifPasswd : any;
  
  constructor(
    private router : Router,
    private userSessionService : UserSessionService,
    private formBuilber : FormBuilder,
    private apiUtilisateurService : ApiUtilisateurService,
  ) { }

  ngOnInit(): void {
    this.userSessionService.user$.subscribe((user : any) => {
      this.user  = user;
      console.log(this.user)

      this.formModifPasswd = this.formBuilber.group({
        oldPasswd :['test1234=',[Validators.required]],
        newPasswd :['test',[Validators.required]],
        confirmNewPasswd : ['test',[Validators.required]]
      
      })
    })
  }

  saveClick():void{
    if(this.formModifPasswd.value.confirmNewPasswd === this.formModifPasswd.value.newPasswd){
      this.formModifPasswd.valid ? this.apiUtilisateurService.changerMotDePasse(this.user.id, this.formModifPasswd.value).subscribe() :'';
      this.router.navigate(['profil'])
    }else{
      alert('le mot de passe et la confirmation du mot de passe doivent correspondre');
    }
  }

  cancelClick():void{
    this.router.navigate(['profil'])
  }
}
