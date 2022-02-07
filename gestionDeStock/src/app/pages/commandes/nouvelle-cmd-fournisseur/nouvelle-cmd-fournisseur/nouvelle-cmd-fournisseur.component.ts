import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AjoutPanier } from 'src/app/models/article/ajoutPanier';
import { Article } from 'src/app/models/article/article';
import { ArticleFournisseur } from 'src/app/models/article/article-fournisseur';
import { Categorie } from 'src/app/models/categorie/categories';
import { Commande } from 'src/app/models/commande/commande';
import { UserWithAdresse } from 'src/app/models/utilisateur/userWithAdresse';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { ApiArticleService } from 'src/app/services/api/api-article.service';
import { ApiCategorieService } from 'src/app/services/api/api-categorie.service';
import { ApiCommandeService } from 'src/app/services/api/api-commande.service';
import { ApiUtilisateurService } from 'src/app/services/api/api-utilisateur.service';

@Component({
  selector: 'app-nouvelle-cmd-fournisseur',
  templateUrl: './nouvelle-cmd-fournisseur.component.html',
  styleUrls: ['./nouvelle-cmd-fournisseur.component.scss']
})
export class NouvelleCmdFournisseurComponent implements OnInit {

  public articleFournisseur : ArticleFournisseur[]=[]
  public fournisseurs : UserWithAdresse[]=[]
  public formNouvelCommandeFournisseur: any
  public articleId : number =0
  public article : Article = new Article('')

  constructor(
    private router : Router,
    private formBuilber: FormBuilder,
    private apiUtilisateurService : ApiUtilisateurService,
    private apiCommandeService : ApiCommandeService,
    private activatedRoute : ActivatedRoute
  ) {
    this.article = this.activatedRoute.snapshot.data["datas"]
   }

  ngOnInit(): void {
    this.getFournisseurByArticle();
    //this.article = this.apiArticleService.getArticleByID(this.articleId)
    console.log(this.article)

    this.formNouvelCommandeFournisseur = this.formBuilber.group({
      fournisseur : [,[Validators.required]],
      quantite : [,[Validators.required]],
    })
  }

  saveClick():void{
    if(this.formNouvelCommandeFournisseur.valid ){
      let newCommande : AjoutPanier = new AjoutPanier('')
      newCommande.articleId = this.article.id
      newCommande.fournisseurId = parseInt(this.formNouvelCommandeFournisseur.value.fournisseur)
      newCommande.quantite = this.formNouvelCommandeFournisseur.value.quantite
      // newCommande.fournisseurId = parseInt(this.formNouvelCommandeFournisseur.value.fournisseur)
      // this.articleFournisseur.map(
      //   a => a.fournisseur.id == newCommande.fournisseurId ? newCommande.fournisseur = a.fournisseur : ''
      // )
      //   console.log(newCommande)
     
     
      this.apiCommandeService.ajouterPanier(newCommande).subscribe()
        
    }
    //this.router.navigate(['articles']);
  }

  cancelClick():void{
    this.router.navigate(['articles']);
  }

  getFournisseurByArticle(){
    this.apiUtilisateurService.getFournisseurByArticle(this.article.id).subscribe(
      datas => {
        this.articleFournisseur = datas;
        this.articleFournisseur.map(a => this.fournisseurs.push(a.fournisseur))
        console.log(this.fournisseurs)
      }
    )
    
  }

  selectedFile =null;

  onFileSelected(event :any){
    this.selectedFile = event.target.files[0];
  }

  

}
