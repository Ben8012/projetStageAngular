import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categories';
import { ApiCategorieService } from 'src/app/services/api-categorie.service';

@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.scss']
})
export class PageCategorieComponent implements OnInit {

  public categories : Categorie[]=[]

  constructor(
    private router : Router,
    private apiCategorieService : ApiCategorieService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  nouvelCategorie() : void{
    this.router.navigate(['nouvelcategorie']);
  }

  getAllCategories(){
    this.apiCategorieService.getAllCategories().subscribe(datas => {this.categories = datas;});
  }
}
