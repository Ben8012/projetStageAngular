import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article/article';
import { ApiArticleService } from 'src/app/services/api-article.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  constructor(
   
  ) { }

  ngOnInit(): void {
   
  }

}
