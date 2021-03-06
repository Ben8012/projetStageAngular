import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { AjoutPanier } from 'src/app/models/article/ajoutPanier';
import { Article } from 'src/app/models/article/article';
import { AuthUser } from 'src/app/models/auth/auth-user';
import { Categorie } from 'src/app/models/categorie/categories';
import { Commande } from 'src/app/models/commande/commande';
import { UserWithAdresse } from 'src/app/models/utilisateur/userWithAdresse';
import { ApiArticleService } from 'src/app/services/api/api-article.service';
import { ApiCategorieService } from 'src/app/services/api/api-categorie.service';
import { ApiCommandeService } from 'src/app/services/api/api-commande.service';
import { RoleUtilisateurEnum } from 'src/app/services/enums/role-utilisateur.enum';
import { UserSessionService } from 'src/app/services/user_session/user-session.service';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit {

  public articles : Article[]=[];
  public categories : Categorie[]=[]; 
  public articleByCategories : Article[]= [];
  public newArticles : Article[]= [];
  public formCategories : any
  public categorieValue : any
  public user : AuthUser = new AuthUser("");
  public roles = RoleUtilisateurEnum 
  public commandes : Commande[]=[]
  public nbComandes : number =0
  public total : number = 0

  constructor(
    private router:Router,
    private apiArticleService : ApiArticleService,
    private apiCategorieService : ApiCategorieService,
    private formBuilber: FormBuilder,
    private userSessionService : UserSessionService,
    private apiCommandeService : ApiCommandeService
  ) { }

  ngOnInit(): void {
    this.userSessionService.user$.subscribe((user : any) => {
      this.user  = user;
      //console.log(this.user)
    })

    this.getAllArticles();
    this.getAllCategories();

    this.formCategories = this.formBuilber.group({
      categorie:[,[Validators.required]],
      })
  }

  nouvelArticle() : void{
    this.router.navigate(['nouvelarticle']);
  }

  getAllArticles(){
    this.apiArticleService.getAllArticle().subscribe(
      datas => {
        this.newArticles = this.articles = datas;
        console.log(this.articles);
      }, error => {

      }
    );
  }


  getAllCategories(){
      this.apiCategorieService.getAllCategories().subscribe(datas => {this.categories = datas;})
  }

  getCat( categorieValue : Categorie){
    console.log(categorieValue.id)
    if(categorieValue.id){
      this.articleByCategories= [];
      this.articles.map(
        a => a.categorieId == categorieValue.id ? this.articleByCategories.push(a) : ''
      )
      this.newArticles = this.articleByCategories
    }
    else{
      this.getAllArticles();
    }
  }

  ajouterPanier( article : Article){
   
      let ajouterPanier : AjoutPanier = new AjoutPanier("");
      ajouterPanier.articleId = article.id
      ajouterPanier.quantite = article.quantite
      if(this.user.role == this.roles.client){
        ajouterPanier.clientId = this.user.id
      }else if(this.user.role == this.roles.fournisseur){
        ajouterPanier.fournisseurId = this.user.id
      }else if(this.user.role == this.roles.preparateur){
        ajouterPanier.preparateurId = this.user.id
      }else if(this.user.role == this.roles.admin){
        ajouterPanier.adminId = this.user.id
      }
      this.apiCommandeService.ajouterPanier(ajouterPanier).subscribe();
      this.nbComandes++
      this.total += (article.prixTTC * article.quantite)
  }

  modifier(id: number){
    this.router.navigate(['modifierarticle/'+id])
  }

  supprimer(articleId : number){
    this.apiArticleService.softDeleteArticle(articleId).subscribe(
      datas => {
       this.newArticles = datas;
      }
    )
  }

  goPanier(){
    this.router.navigate(['monpanier'])
  }
}
