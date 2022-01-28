import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiUtilisateurService } from 'src/app/services/api-utilisateur.service';
import { RoleUtilisateurEnum } from 'src/app/services/enums/role-utilisateur.enum';
//import * as bcrypt from 'bcrypt';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {

  roles = RoleUtilisateurEnum   
  public formInscription: any

  constructor(
    private formBuilber: FormBuilder,
    private apiUtilisateurService : ApiUtilisateurService
  ) { }

  ngOnInit(): void {

    this.formInscription = this.formBuilber.group({
      nom :['Sterckx',[Validators.required]],
      prenom :['Benjamin',[Validators.required]],
      telephone :['0468/303030',[Validators.required]],
      dateNaissance :['1980-12-10',[Validators.required]],
      email :['benja@mail.com',[Validators.required]],
      rue :['de la rue',[Validators.required]],
      numero : [1,[Validators.required]],
      codePostal :[1495,[Validators.required]],
      ville :['ma ville',[Validators.required]],
      pays :['mon pays',[Validators.required]],
      role :['admin',[Validators.required]],
      passwd :['test1234=',[Validators.required]],
      passwdConfirm : ['test1234=',[Validators.required]]
    })
   
  }


  register(){
    if(this.formInscription.value.passwdConfirm === this.formInscription.value.passwd){
      delete this.formInscription.value.passwdConfirm;
      this.formInscription.valid ? this.apiUtilisateurService.addUtilisateur(this.formInscription.value).subscribe() :'';
    }
    else{
      alert('le mot de passe et la confirmation du mot de passe doivent correspondre')
    }
    
  }
}
