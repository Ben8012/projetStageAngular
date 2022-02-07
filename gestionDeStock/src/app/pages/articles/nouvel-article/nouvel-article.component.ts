import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article/article';
import { Categorie } from 'src/app/models/categorie/categories';
import { Stock } from 'src/app/models/stock/stock';
import { ApiArticleService } from 'src/app/services/api/api-article.service';
import { ApiCategorieService } from 'src/app/services/api/api-categorie.service';
import { ApiStockService } from 'src/app/services/api/api-stock.service';


@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit {
  
  public categories : Categorie[]=[]
  public formNouvelArticle: any
  public stocks : Stock[]=[]

  constructor(
    private router : Router,
    private formBuilber: FormBuilder,
    private apiArticleService : ApiArticleService,
    private apiCategorieService : ApiCategorieService,
    private apiStockService : ApiStockService,
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllStocks();

    this.formNouvelArticle = this.formBuilber.group({
      codeArticle :[,[Validators.required]],
      designation :[,[Validators.required]],
      prixHTVA :[,[Validators.required]],
      tauxTVA :[,[Validators.required]],
      prixTTC :[,[Validators.required]],
      categorieId :[,[Validators.required]],
      urlImage : [,[Validators.required]],
      codeStock : [,[Validators.required]],
      quantite : [,[Validators.required]],
    })
  }

  saveClick():void{
    if(this.formNouvelArticle.valid ){
      let newArticle : Article = new Article('')
      newArticle.codeArticle = this.formNouvelArticle.value.codeArticle
      newArticle.designation = this.formNouvelArticle.value.designation
      newArticle.prixHTVA = this.formNouvelArticle.value.prixHTVA
      newArticle.tauxTVA = this.formNouvelArticle.value.tauxTVA
      newArticle.prixTTC = this.formNouvelArticle.value.prixTTC
      newArticle.categorieId = this.formNouvelArticle.value.categorieId
      newArticle.urlImage = this.formNouvelArticle.value.urlImage
      newArticle.codeStock = this.formNouvelArticle.value.codeStock
      newArticle.quantite = this.formNouvelArticle.value.quantite
      this.apiArticleService.addArticle(newArticle).subscribe()
        
    }
    this.router.navigate(['articles']);
  }

  cancelClick():void{
    this.router.navigate(['articles']);
  }

  getAllCategories(){
    this.apiCategorieService.getAllCategories().subscribe(datas => {this.categories = datas;})
  }

  selectedFile =null;

  onFileSelected(event :any){
    this.selectedFile = event.target.files[0];
  }

  getAllStocks(){
    this.apiStockService.getAllStocks().subscribe(
      datas => {
        this.stocks = datas;
        console.log(this.stocks)
      }
    )
  }

}
