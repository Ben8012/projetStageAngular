import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/auth/auth-user';
import { Commande } from 'src/app/models/commande/commande';
import { ApiCommandeService } from 'src/app/services/api/api-commande.service';
import { StatusCommandeEnum } from 'src/app/services/enums/status-commande.enum';
import { UserSessionService } from 'src/app/services/user_session/user-session.service';
import { DateUtils } from 'src/app/utils/date.utils';

@Component({
  selector: 'app-commandes-fournisseurs',
  templateUrl: './commandes-fournisseurs.component.html',
  styleUrls: ['./commandes-fournisseurs.component.scss']
})
export class CommandesFournisseursComponent implements OnInit {

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
    this.getAllCommandeFournisseur()
  }

  getAllCommandeFournisseur(){
    this.apiCommandeService.getAllCommandeFournisseur().subscribe(
      datas => {
       
        this.commandes = datas;
        this.commandes.map(c => DateUtils.format(new Date(c.createdAt)))
       
        console.log(this.commandes);
      
      }, error => {
        }
    );
   
  }

  validerToutPret(){
   
    this.apiCommandeService.validerToutCommandePret( this.commandes.map(c => c.id),this.user.id).subscribe(
      // datas => {
      //   this.commandes = datas;
      //   this.commandes.map(
      //     c => c.client = c.admin = c.fournisseur = c.preparateur
      //     )
      //   console.log(this.commandes);
      
      // }, error => {

      // }
    );
  }

  cancel(){
    this.router.navigate([''])
  }

  valider(commandeId: number,quantite : number){
    this.apiCommandeService.commandePrete(this.user.id, commandeId, quantite).subscribe(
      // datas => {
      //   this.commandes = datas;
      //   this.commandes.map(
      //     c => c.client = c.admin = c.fournisseur = c.preparateur
      //     )
      //     console.log(this.commandes)
       
      // }, error => {

      // }
    );
  }

  commander(articleId : number){
    this.router.navigate(['nouvellecommandefournisseur/'+articleId])
  }

}
