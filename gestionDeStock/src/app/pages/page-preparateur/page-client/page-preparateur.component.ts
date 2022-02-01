import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserWithAdresse } from 'src/app/models/userWithAdresse';
import { ApiUtilisateurService } from 'src/app/services/api-utilisateur.service';
import { RoleUtilisateurEnum } from 'src/app/services/enums/role-utilisateur.enum';

@Component({
  selector: 'app-page-preparateur',
  templateUrl: './page-preparateur.component.html',
  styleUrls: ['./page-preparateur.component.scss']
})
export class PageClientComponent implements OnInit {

  public allPreparateurs: UserWithAdresse[]=[]
  roles = RoleUtilisateurEnum 
  public formModifRole: any
  public id : string =''

  constructor(
    private router : Router,
    private apiUtilisateurService : ApiUtilisateurService,
    private formBuilber : FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.getAllPreparateurs()

    this.formModifRole = this.formBuilber.group({
      role :[,[Validators.required]]
    })
  }

  nouveauPreparateur():void{
    this.id = 'preparateur'
    this.router.navigate(['nouveauclient/'+this.id])
  }

  getAllPreparateurs(){
    this.apiUtilisateurService.getAllPreparateurs().subscribe(
      datas  =>{
        this.allPreparateurs = datas
        //this.allClients.map(c =>  DateUtils.format(new Date(c.dateNaissance)))
       
        console.log(this.allPreparateurs)
      }, error => {

        }
    );
  }

  deleteClient(clientId : number){
    this.apiUtilisateurService.deleteClient(clientId).subscribe(
      error =>{

      }
      
    );
    this.getAllPreparateurs();
  }

 
  modifRole(id : number){
    this.formModifRole.valid ? this.apiUtilisateurService.changeRole(id, this.formModifRole.value).subscribe() :'';
  }
}
