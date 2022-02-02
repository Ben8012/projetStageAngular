import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUser } from 'src/app/models/auth/auth-user';
import { Commande } from 'src/app/models/commande/commande';
import { ApiCommandeService } from 'src/app/services/api-commande.service';
import { StatusCommandeEnum } from 'src/app/services/enums/status-commande.enum';
import { UserSessionService } from 'src/app/services/user_session/user-session.service';

@Component({
  selector: 'app-nouvelle-cmd-client-fournisseur',
  templateUrl: './nouvelle-cmd-client-fournisseur.component.html',
  styleUrls: ['./nouvelle-cmd-client-fournisseur.component.scss']
})
export class NouvelleCmdClientFournisseurComponent implements OnInit {

  origin='';
  public user : AuthUser = new AuthUser("");
  public commandes : Commande[]=[]; 
  public total : number = 0
  status = StatusCommandeEnum

  constructor(
    private activatedRoute : ActivatedRoute,
    private apiCommandeService : ApiCommandeService,
    private userSessionService : UserSessionService,
    private router : Router
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(data =>{
    //   this.origin = data.origin;
    // })

    this.userSessionService.user$.subscribe((user : any) => {
      this.user  = user;
      //console.log(this.user)
    })

    this.getCommandeByUser()
  }

  getCommandeByUser(){
    this.apiCommandeService.getCommandeByUser(this.user.id).subscribe(
      datas => {
        this.commandes = datas;
        //console.log(this.commandes);
        this.calculTotal();
      }, error => {

      }
    );
   
  }

  calculTotal(){
    
      this.commandes.map(
        c => this.total += (c.article.prixTTC * c.quantite)
      )
   
  }

  validerTout(){

  }

  cancel(){
    this.router.navigate(['articles'])
  }

  valider(id : number){
    this.apiCommandeService.validerUneCommande(id ,this.user.id).subscribe(
      datas => {
        this.commandes = datas;
        console.log(this.commandes);
        
      }, error => {

      }
    );
  }

  annuler(id :number){
    this.apiCommandeService.annulerUneCommande(id ,this.user.id).subscribe(
      datas => {
        this.commandes = datas;
        console.log(this.commandes);
        this.calculTotal();
      }, error => {

      }
    );
    
  }
}
