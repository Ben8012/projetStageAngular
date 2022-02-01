import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserWithAdresse } from 'src/app/models/userWithAdresse';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ApiUtilisateurService } from 'src/app/services/api-utilisateur.service';
import { RoleUtilisateurEnum } from 'src/app/services/enums/role-utilisateur.enum';
import { DateUtils } from 'src/app/utils/date.utils';

@Component({
  selector: 'app-page-utilisateurs',
  templateUrl: './page-utilisateurs.component.html',
  styleUrls: ['./page-utilisateurs.component.scss']
})
export class PageUtilisateursComponent implements OnInit {

  public allClients: UserWithAdresse[]=[]
  roles = RoleUtilisateurEnum 
  
  public formModifRole: any

  constructor(
    private router : Router,
    private apiUtilisateurService : ApiUtilisateurService,
    private formBuilber : FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllClients()

    this.formModifRole = this.formBuilber.group({
      role :[,[Validators.required]]
    })

  }

  nouveauUtilisateur():void{
    this.router.navigate(['nouvelutilisateur'])
  }

  getAllClients(){
    this.apiUtilisateurService.getAllClient().subscribe(
      datas  =>{
        this.allClients =datas
        //this.allClients.map(c =>  DateUtils.format(new Date(c.dateNaissance)))
       
        console.log(this.allClients)
      }, error => {

        }
    );
  }

  deleteClient(clientId : number){
    this.apiUtilisateurService.deleteClient(clientId).subscribe(
      error =>{

      }
      
    );
    this.getAllClients();
  }


  modifRole(id : number){
    this.formModifRole.valid ? this.apiUtilisateurService.changeRole(id, this.formModifRole.value).subscribe() :'';
  }
}
