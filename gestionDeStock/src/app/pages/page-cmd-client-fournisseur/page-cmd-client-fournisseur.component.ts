import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-client-fournisseur',
  templateUrl: './page-cmd-client-fournisseur.component.html',
  styleUrls: ['./page-cmd-client-fournisseur.component.scss']
})
export class PageCmdClientFournisseurComponent implements OnInit {

  origin='';

  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>{
      this.origin = data.origin;
    })
  }

  nouvelleCommande() : void{
    if(this.origin === 'client'){
      this.router.navigate(['nouvellecommandeclient'])

    }
    else if(this.origin === 'fournisseur'){
      this.router.navigate(['nouvellecommandefournisseur'])
      
    }
  }
}
