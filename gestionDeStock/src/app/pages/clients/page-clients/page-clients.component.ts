import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserWithAdresse } from 'src/app/models/utilisateur/userWithAdresse';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { ApiUtilisateurService } from 'src/app/services/api/api-utilisateur.service';
import { RoleUtilisateurEnum } from 'src/app/services/enums/role-utilisateur.enum';
import { DateUtils } from 'src/app/utils/date.utils';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientComponent implements OnInit {

  public allClients: UserWithAdresse[]=[]
  roles = RoleUtilisateurEnum 
  getrole : any
  
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
    this.router.navigate(['utilisateurs'])
  }

  getRole(getrole : RoleUtilisateurEnum, id : number){
    console.log(getrole)
    this.formModifRole.valid ? this.apiUtilisateurService.changeRole(id, getrole).subscribe() :'';
  }
}
