import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Article } from 'src/app/models/article';
import { ApiArticleService } from 'src/app/services/api-article.service';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit {

  public articles : Article[]=[];


  constructor(
    private router:Router,
    private apiArticleService : ApiArticleService
  ) { }

  ngOnInit(): void {
   this.getAllArticles();
  }

  nouvelArticle() : void{
    this.router.navigate(['nouvelarticle']);
   
  }

  getAllArticles(){
    this.apiArticleService.getAllArticle().subscribe(datas => {this.articles = datas;})
  }

}
