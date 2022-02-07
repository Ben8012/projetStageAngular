import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article/article';
import { Categorie } from 'src/app/models/categorie/categories';
import { Stock } from 'src/app/models/stock/stock';
import { ApiArticleService } from 'src/app/services/api/api-article.service';
import { ApiCategorieService } from 'src/app/services/api/api-categorie.service';
import { ApiStockService } from 'src/app/services/api/api-stock.service';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.scss']
})
export class ModifierArticleComponent implements OnInit {

  public formModifierArticle: any
  public articleId : any
  public categories : Categorie[]=[]
  public stocks : Stock[]=[]
  selectedFile =null;
  public article : Article = new Article('')

  constructor(
    private formBuilber: FormBuilder,
    private activatedRoute : ActivatedRoute,
    private apiCategorieService : ApiCategorieService,
    private apiArticleService : ApiArticleService,
    private apiStockService : ApiStockService,
    private router : Router,
  ) { 
    this.article = this.activatedRoute.snapshot.data["datas"]
  }

  ngOnInit(): void {
    //this.articleId = this.activatedRoute.snapshot.paramMap.get('id');

    this.getAllCategories();
    this.getAllStocks();

    console.log(this.article)

    this.formModifierArticle = this.formBuilber.group({
      codeArticle :[this.article.codeArticle,[Validators.required]],
      designation :[this.article.designation,[Validators.required]],
      prixHTVA :[this.article.prixHTVA,[Validators.required]],
      tauxTVA :[this.article.tauxTVA,[Validators.required]],
      prixTTC :[this.article.prixTTC,[Validators.required]],
      categorieId :[this.article.categorieId,[Validators.required]],
      urlImage : [this.article.urlImage,[Validators.required]],
      codeStock : [this.article.codeStock,[Validators.required]],
      quantite : [this.article.quantite,[Validators.required]],
    })
  }

  getAllCategories(){
    this.apiCategorieService.getAllCategories().subscribe(
      datas => {
        this.categories = datas;
        //console.log(this.categories)
      }
    )
  }


  getAllStocks(){
    this.apiStockService.getAllStocks().subscribe(
      datas => {
        this.stocks = datas;
        console.log(this.stocks)
      }
    )
  }

  // getArticleById(){
  //   this.apiArticleService.getArticleByID(this.articleId).subscribe(
  //     datas => {
  //       this.article = datas
  //       console.log(this.article)
  //     }
  //   )
  // }

  onFileSelected(event :any){
    this.selectedFile = event.target.files[0];
  }

  saveClick():void{
    if(this.formModifierArticle.valid ){
      let newArticle : Article = new Article('')
      newArticle.codeArticle = this.formModifierArticle.value.codeArticle
      newArticle.designation = this.formModifierArticle.value.designation
      newArticle.prixHTVA = this.formModifierArticle.value.prixHTVA
      newArticle.tauxTVA = this.formModifierArticle.value.tauxTVA
      newArticle.prixTTC = this.formModifierArticle.value.prixTTC
      newArticle.categorieId = this.formModifierArticle.value.categorieId
      newArticle.urlImage = this.formModifierArticle.value.urlImage
      newArticle.codeStock = this.formModifierArticle.value.codeStock
      newArticle.quantite = this.formModifierArticle.value.quantite
      this.apiArticleService.updateArticle(this.article.id,newArticle).subscribe(
            datas => {
              this.article = datas
              console.log(this.article)
            }
          )
        
   
    this.router.navigate(['articles']);
    }
  }

  cancelClick():void{
    this.router.navigate(['articles']);
  }

}
