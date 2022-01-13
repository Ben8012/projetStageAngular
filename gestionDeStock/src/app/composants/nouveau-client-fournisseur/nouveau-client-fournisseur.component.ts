import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-client-fournisseur',
  templateUrl: './nouveau-client-fournisseur.component.html',
  styleUrls: ['./nouveau-client-fournisseur.component.scss']
})
export class NouveauClientFournisseurComponent implements OnInit {

  origin='';

  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>{
      this.origin = data.origin;
    })
  }

  saveClick():void{

  }

  cancelClick():void{
    if(this.origin === 'client'){
      this.router.navigate(['clients'])
    }
    else if(this.origin ==='fournisseur'){
      this.router.navigate(['fournisseurs'])
    }
  }
}
