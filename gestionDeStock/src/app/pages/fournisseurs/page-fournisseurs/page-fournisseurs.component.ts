import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserWithAdresse } from 'src/app/models/utilisateur/userWithAdresse';
import { ApiUtilisateurService } from 'src/app/services/api-utilisateur.service';
import { RoleUtilisateurEnum } from 'src/app/services/enums/role-utilisateur.enum';

@Component({
  selector: 'app-page-fournisseurs',
  templateUrl: './page-fournisseurs.component.html',
  styleUrls: ['./page-fournisseurs.component.scss']
})
export class PageFournisseursComponent implements OnInit {

  public allFournisseurs: UserWithAdresse[]=[]
  roles = RoleUtilisateurEnum 
  public formModifRole: any
  public id : string =''

  constructor(
    private router : Router,
    private apiUtilisateurService : ApiUtilisateurService,
    private formBuilber : FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllFournisseurs()

    this.formModifRole = this.formBuilber.group({
      role :[,[Validators.required]]
    })
  }

  nouveauFournisseur():void{
    this.id = 'fournisseur'
    this.router.navigate(['nouveauclient/'+this.id])
    //this.router.navigate(['nouveaufournisseur'])
  }

  getAllFournisseurs(){
    this.apiUtilisateurService.getAllFournisseurs().subscribe(
      datas  =>{
        this.allFournisseurs = datas
        //this.allClients.map(c =>  DateUtils.format(new Date(c.dateNaissance)))
       
        console.log(this.allFournisseurs)
      }, error => {

        }
    );
  }

  deleteClient(clientId : number){
    this.apiUtilisateurService.deleteClient(clientId).subscribe(
      error =>{

      }
      
    );
    this.getAllFournisseurs();
  }


  modifRole(id : number){
    this.formModifRole.valid ? this.apiUtilisateurService.changeRole(id, this.formModifRole.value).subscribe() :'';
  }
}
