import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-fournisseurs',
  templateUrl: './page-fournisseurs.component.html',
  styleUrls: ['./page-fournisseurs.component.scss']
})
export class PageFournisseursComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  nouveauFournisseur():void{
    this.router.navigate(['nouveaufournisseur'])
  }
}
