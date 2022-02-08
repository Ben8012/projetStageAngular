import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUtilisateurService } from 'src/app/services/api/api-utilisateur.service';

@Component({
  selector: 'app-nouveau-preparateur',
  templateUrl: './nouveau-preparateur.component.html',
  styleUrls: ['./nouveau-preparateur.component.scss']
})
export class NouveauPreparateurComponent implements OnInit {

  public formNouveauPreparateur: any

  constructor(
    private router : Router,
    private formBuilber: FormBuilder,
    private apiUtilisateurService : ApiUtilisateurService
  ) { }

  ngOnInit(): void {
  
    this.formNouveauPreparateur = this.formBuilber.group({
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
      societe :['factory',[Validators.required]],
      role :['préparateur',[Validators.required]],
    })
  }

  saveClick():void{
    this.formNouveauPreparateur.valid ? this.apiUtilisateurService.addFournisseur(this.formNouveauPreparateur.value).subscribe() :'';
  }

  cancelClick():void{
   
      this.router.navigate(['preparateur'])
  
  }
}
