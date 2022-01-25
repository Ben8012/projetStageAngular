import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCategorieService } from 'src/app/services/api-categorie.service';

@Component({
  selector: 'app-nouvelle-categorie',
  templateUrl: './nouvelle-categorie.component.html',
  styleUrls: ['./nouvelle-categorie.component.scss']
})
export class NouvelleCategorieComponent implements OnInit {

  public formNouvelCategorie: any
  

  constructor(
    private router : Router,
    private formBuilber: FormBuilder,
    private apiCategorieService : ApiCategorieService
  ) { }

  ngOnInit(): void {

    this.formNouvelCategorie = this.formBuilber.group({
      nom :['test code article',[Validators.required]],
      codeCategorie :['test designation',[Validators.required]],
      description :['test description',[Validators.required]],
    })
  }

  saveClick():void{
    this.formNouvelCategorie.valid ? this.apiCategorieService.addCategorie(this.formNouvelCategorie.value).subscribe() :''
    this.router.navigate(['categories'])
  }

  cancelClick():void{
    this.router.navigate(['categories'])
  }
}
