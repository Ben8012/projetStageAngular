import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/auth/auth-user';
import { ApiUtilisateurService } from 'src/app/services/api-utilisateur.service';
import { RoleUtilisateurEnum } from 'src/app/services/enums/role-utilisateur.enum';
import { UserSessionService } from 'src/app/services/user_session/user-session.service';
import { DateUtils } from 'src/app/utils/date.utils';

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.scss']
})
export class NouvelUtilisateurComponent implements OnInit {

  roles = RoleUtilisateurEnum   
  public formModifUtil: any;
  public user : AuthUser = new AuthUser("");
  public dateNaissance ='';

  constructor(
    private router : Router,
    private formBuilber: FormBuilder,
    private apiUtilisateurService : ApiUtilisateurService,
    private userSessionService :UserSessionService,
  ) { }

  ngOnInit(): void {

    this.userSessionService.user$.subscribe((user : any) => {
      this.user  = user;
      this.dateNaissance  = DateUtils.format(new Date(this.user.dateNaissance));
      //console.log(this.dateNaissance)
    })

    this.formModifUtil = this.formBuilber.group({
      nom :[this.user.nom,[Validators.required]],
      prenom :[this.user.prenom,[Validators.required]],
      telephone :[this.user.telephone,[Validators.required]],
      dateNaissance :[this.dateNaissance,[Validators.required]],
      email :[this.user.email,[Validators.required]],
      rue :[this.user.adresse.rue,[Validators.required]],
      numero : [this.user.adresse.numero,[Validators.required]],
      codePostal :[this.user.adresse.codePostal,[Validators.required]],
      ville :[this.user.adresse.ville,[Validators.required]],
      pays :[this.user.adresse.pays,[Validators.required]],
      role :[this.user.role,[Validators.required]],
     
    })
   
  }

  saveClick():void{
    this.formModifUtil.valid ? this.apiUtilisateurService.updateUtilisateur(this.user.id , this.formModifUtil.value).subscribe(
      (data :any) =>{
        this.userSessionService.saveSession(data.token)
         // console.log(data)         
        this.router.navigate(['profil']);
      }, error => {

      }
    ) :'';
  }
  cancelClick():void{
    this.router.navigate(['utilisateurs'])
  }
}
