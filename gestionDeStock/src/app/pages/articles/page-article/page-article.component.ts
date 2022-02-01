import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { Article } from 'src/app/models/article';
import { Categorie } from 'src/app/models/categories';
import { ApiArticleService } from 'src/app/services/api-article.service';
import { ApiCategorieService } from 'src/app/services/api-categorie.service';

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

  constructor(
    private router:Router,
    private apiArticleService : ApiArticleService,
    private apiCategorieService : ApiCategorieService,
    private formBuilber: FormBuilder,
  ) { }

  ngOnInit(): void {
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
    this.articleByCategories= [];
  
    this.articles.map(
      a => a.categorieId == categorieValue.id ? this.articleByCategories.push(a) : ''
    )

    console.log(this.articleByCategories)
    this.newArticles = this.articleByCategories
  }
}
