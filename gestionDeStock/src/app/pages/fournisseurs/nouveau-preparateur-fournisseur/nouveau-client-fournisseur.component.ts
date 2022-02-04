import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUtilisateurService } from 'src/app/services/api/api-utilisateur.service';

@Component({
  selector: 'app-nouveau-client-fournisseur',
  templateUrl: './nouveau-client-fournisseur.component.html',
  styleUrls: ['./nouveau-client-fournisseur.component.scss']
})
export class NouveauClientFournisseurComponent implements OnInit {

  // origin='';
  formNouveauFournisseur: any
  public nom : any

  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private formBuilber: FormBuilder,
    private apiUtilisateurService : ApiUtilisateurService
  ) { }

  ngOnInit(): void {
    this.nom = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.nom)
  
    this.formNouveauFournisseur = this.formBuilber.group({
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
      role :[this.nom,[Validators.required]],
    })
  }

  saveClick():void{
    this.formNouveauFournisseur.valid ? this.apiUtilisateurService.addFournisseur(this.formNouveauFournisseur.value).subscribe() :'';
  }

  cancelClick():void{
    if(this.nom === 'preparateur'){
      this.router.navigate(['preparateur'])
    }
    else if(this.nom ==='fournisseur'){
      this.router.navigate(['fournisseurs'])
    }
  }
}
