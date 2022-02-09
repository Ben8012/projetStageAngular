import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUser } from 'src/app/models/auth/auth-user';
import { Commande } from 'src/app/models/commande/commande';
import { ApiCommandeService } from 'src/app/services/api/api-commande.service';
import { RoleUtilisateurEnum } from 'src/app/services/enums/role-utilisateur.enum';
import { StatusCommandeEnum } from 'src/app/services/enums/status-commande.enum';
import { UserSessionService } from 'src/app/services/user_session/user-session.service';

@Component({
  selector: 'app-panier-client',
  templateUrl: './panier-client.component.html',
  styleUrls: ['./panier-client.component.scss']
})
export class PanierClientComponent implements OnInit {

  public user : AuthUser = new AuthUser("");
  public commandes : Commande[]=[]; 
  public total : number = 0
  status = StatusCommandeEnum
  public isNoValid : boolean = true

  constructor(
    private apiCommandeService : ApiCommandeService,
    private userSessionService : UserSessionService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.userSessionService.user$.subscribe((user : any) => {
      this.user  = user;
    })

    this.getCommandeByUser()
  }

  getCommandeByUser(){
    console.log('user id :'+this.user.id)
    this.apiCommandeService.getCommandeByUser(this.user.id).subscribe(
      datas => {
        this.commandes = datas;
        console.log( this.commandes);
        this.calculTotal();
      }, error => {
        }
    );
   
  }

  calculTotal(){
    if(this.commandes.map(c=> c.status == StatusCommandeEnum.attente)){
      this.total = 0
      this.commandes.map(
        c => c.status == StatusCommandeEnum.attente ? this.total += (c.article.prixTTC * c.quantite) : ''
      )
    }
     
  }

  validerTout(){
    if(this.toutArticleValider()){
      alert('Les articles ont deja été validé')
    }else {
      this.apiCommandeService.validerToutCommande( this.commandes.map(c => c.id),this.user.id) .subscribe(
        datas => {
          this.commandes = datas;
          //console.log(this.commandes);
          this.calculTotal();
        }, error => {
  
        }
      ); 
    }
     
  }
  

  toutArticleValider():boolean{
    let isnotvalid = true
    let attente = this.commandes.map(c => c.status == StatusCommandeEnum.attente)
    console.log(attente)
    for (let i = 0; i < attente.length; i++) {
        isnotvalid ? attente[i] == true ? isnotvalid = false :'' :'';
    }
    console.log(isnotvalid)
    this.isNoValid =isnotvalid
    return isnotvalid
  }

  cancel(){
    this.router.navigate(['articles'])
  }

  valider(id : number){
    this.apiCommandeService.validerUneCommande(id ,this.user.id).subscribe(
      datas => {
        this.commandes = datas;
        //console.log(this.commandes);
        this.calculTotal();
      }, error => {

      }
    );
  }

  annuler(id :number){
    this.apiCommandeService.annulerUneCommande(id ,this.user.id).subscribe(
      datas => {
        this.commandes = datas;
        //console.log(this.commandes);
        this.calculTotal();
      }, error => {

      }
    );
    
  }

  recu(id:number){
    this.apiCommandeService.commandeRecue(id ,this.user.id).subscribe(
      datas => {
        this.commandes = datas;
        //console.log(this.commandes);
        this.calculTotal();
      }, error => {

      }
    );
  }
}
