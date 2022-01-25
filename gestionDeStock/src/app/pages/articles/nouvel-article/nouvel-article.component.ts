import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Categorie } from 'src/app/models/categories';
import { ApiArticleService } from 'src/app/services/api-article.service';
import { ApiCategorieService } from 'src/app/services/api-categorie.service';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit {
  
  public categories : Categorie[]=[]
  public formNouvelArticle: any

  constructor(
    private router : Router,
    private formBuilber: FormBuilder,
    private apiArticleService : ApiArticleService,
    private apiCategorieService : ApiCategorieService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();

    this.formNouvelArticle = this.formBuilber.group({
      codeArticle :['test code article',[Validators.required]],
      designation :['test designation',[Validators.required]],
      prixHTVA :[10,[Validators.required]],
      tauxTVA :[21,[Validators.required]],
      prixTTC :[15,[Validators.required]],
      categorieID :[2,[Validators.required]],
      urlImage : ['test url',[Validators.required]]
    })
  }

  saveClick():void{
    this.formNouvelArticle.valid ? this.apiArticleService.addArticle(this.formNouvelArticle.value).subscribe() :'';
    this.router.navigate(['articles']);
  }

  cancelClick():void{
    this.router.navigate(['articles']);
  }

  getAllCategories(){
    this.apiCategorieService.getAllCategories().subscribe(datas => {this.categories = datas;})
  }
}
