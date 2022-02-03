import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/auth/auth-user';
import { Commande } from 'src/app/models/commande/commande';
import { ApiCommandeService } from 'src/app/services/api-commande.service';
import { StatusCommandeEnum } from 'src/app/services/enums/status-commande.enum';
import { UserSessionService } from 'src/app/services/user_session/user-session.service';

@Component({
  selector: 'app-commande-preparateur',
  templateUrl: './commande-preparateur.component.html',
  styleUrls: ['./commande-preparateur.component.scss']
})
export class CommandePreparateurComponent implements OnInit {

  public user : AuthUser = new AuthUser("");
  public commandes : Commande[]=[]; 
  status = StatusCommandeEnum
  
  constructor(
    private userSessionService : UserSessionService,
    private apiCommandeService : ApiCommandeService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.userSessionService.user$.subscribe((user : any) => {
      this.user  = user;
    })
    this.getCommandeToDo()
  }

  getCommandeToDo(){
    this.apiCommandeService.getCommandeToDo(this.user.id).subscribe(
      datas => {
        this.commandes = datas;
        console.log(this.commandes);
      
      }, error => {
        }
    );
   
  }

  validerTout(){
   
    // this.apiCommandeService.validerToutCommande( this.commandes.map(c => c.id),this.user.id).subscribe(
    //   datas => {
    //     this.commandes = datas;
    //     console.log(this.commandes);
      
    //   }, error => {

    //   }
    // );
  }

  cancel(){
    this.router.navigate([''])
  }

  valider(id : number){
    this.apiCommandeService.commandePrete(id ,this.user.id).subscribe(
      datas => {
        this.commandes = datas;
        //console.log(this.commandes);
       
      }, error => {

      }
    );
  }

  annuler(id :number){
    // this.apiCommandeService.annulerUneCommande(id ,this.user.id).subscribe(
    //   datas => {
    //     this.commandes = datas;
    //     //console.log(this.commandes);
        
    //   }, error => {

    //   }
    // );
    
  }

}
