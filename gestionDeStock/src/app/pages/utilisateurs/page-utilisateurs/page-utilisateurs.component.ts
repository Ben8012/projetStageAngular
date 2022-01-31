import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserWithAdresse } from 'src/app/models/userWithAdresse';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ApiUtilisateurService } from 'src/app/services/api-utilisateur.service';

@Component({
  selector: 'app-page-utilisateurs',
  templateUrl: './page-utilisateurs.component.html',
  styleUrls: ['./page-utilisateurs.component.scss']
})
export class PageUtilisateursComponent implements OnInit {

  public allClients: UserWithAdresse[]=[]

  constructor(
    private router : Router,
    private apiUtilisateurService : ApiUtilisateurService
  ) { }

  ngOnInit(): void {
    this.getAllClients()

  }

  nouveauUtilisateur():void{
    this.router.navigate(['nouvelutilisateur'])
  }

  getAllClients(){
    this.apiUtilisateurService.getAllClient().subscribe(
      datas  =>{
        this.allClients =datas
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

  detailClient(id : number){
    this.router.navigate(['detailsclient/'+id])

  }
}
